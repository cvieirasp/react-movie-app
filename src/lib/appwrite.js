import { Client, Databases, ID, Query } from 'appwrite'

const PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT_ID
const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID
const COLLECTION_ID = import.meta.env.VITE_APPWRITE_COLLECTION_ID

const client = new Client()
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject(PROJECT_ID)

const database = new Databases(client)

export const updateSearchCount = async (searchTerm, movie) => {
  // Utilizar SDK do Appwrite para verificar se o termo de busca existe no banco de dados.
  try {
    const result = await database.listDocuments(DATABASE_ID, COLLECTION_ID, [
      Query.equal('search_term', searchTerm),
    ])

    // Atualiza o contador caso o termo exista.
    if (result.documents.length > 0) {
      const document = result.documents[0]

      await database.updateDocument(DATABASE_ID, COLLECTION_ID, document.$id, {
        count: document.count + 1,
      })

      return
    }

    // Cria um novo registro caso o termo não exista.
    await database.createDocument(DATABASE_ID, COLLECTION_ID, ID.unique(), {
      search_term: searchTerm,
      count: 1,
      movie_id: movie.id,
      poster_url: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
    })
  } catch (err) {
    console.error(`Erro ao registrar a busca: ${err}`)
  }
}

export const getTrendingMovies = async () => {
  try {
    const result = await database.listDocuments(DATABASE_ID, COLLECTION_ID, [
      Query.orderDesc('count'),
      Query.limit(5),
    ])

    return result.documents
  } catch (err) {
    console.error(`Erro ao buscar os filmes em destaque: ${err}`)
    return []
  }
}
