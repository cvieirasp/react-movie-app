import { useEffect, useState } from 'react'
import { useDebounce } from 'react-use'

import Search from './components/Search'
import Spinner from './components/Spinner'
import MovieCard from './components/MovieCard'
import { getTrendingMovies, updateSearchCount } from './lib/appwrite'

const API_BASE_URL = 'https://api.themoviedb.org/3'
const API_KEY = import.meta.env.VITE_TMDB_API_KEY

const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`,
  },
}

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [errorMessages, setErrorMessages] = useState('')
  const [movies, setMovies] = useState([])
  const [trendingMovies, setTrendingMovies] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('')

  // Implementa o debounce no termo de busca para evitar realizar muitas requisições à API, 
  // aguardando 500ms até que o usuário pare de digitar.
  useDebounce(() => setDebouncedSearchTerm(searchTerm), 500, [searchTerm])

  const fetchMovies = async (query = '') => {
    setIsLoading(true)
    setErrorMessages('')
    try {
      const endpoint = query
        ? `${API_BASE_URL}/search/movie?language=pt-BR&query=${query}`
        : `${API_BASE_URL}/discover/movie?language=pt-BR&sort_by=popularity.desc`

      const response = await fetch(endpoint, API_OPTIONS)

      if (!response.ok) {
        throw new Error('Erro ao realizar chamada na API.')
      }

      const data = await response.json()

      if (data.Response === 'False') {
        setMovies([])
        throw new Error(data.Error || 'Erro ao buscar os filmes.')
      }

      setMovies(data.results || [])

      if (query && data.results.length > 0) {
        // Atualiza o contador de busca no Appwrite.
        updateSearchCount(query, data.results[0])
      }
    } catch (err) {
      console.error(`Erro ao realizar a busca de filmes: ${err}`)
      setErrorMessages('Ocorreu um erro ao carregar os filmes. Tente novamente mais tarde.')
    } finally {
      setIsLoading(false)
    }
  }

  const fetchTrendingMovies = async () => {
    try {
      const trendingMovies = await getTrendingMovies()
      setTrendingMovies(trendingMovies)
    } catch (err) {
      console.error(`Erro ao buscar os filmes em destaque: ${err}`)
    }
  }

  useEffect(() => {
    fetchMovies(debouncedSearchTerm)
  }, [debouncedSearchTerm])

  useEffect(() => {
    fetchTrendingMovies()
  }, [])

  return (
    <main>
      <div className='pattern' />

      <div className='wrapper'>
        <header>
          <img src='./hero.png' alt='Imagem do Banner' />
          <h1>Encontre <span className='text-gradient'>Filmes</span> que Você vai Curtir sem Dor de Cabeça</h1>

          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </header>

        {trendingMovies.length > 0 && (
          <section className='trending'>
            <h2>Filmes em Destaque</h2>

            <ul>
              {trendingMovies.map((movie, index) => (
                <li key={movie.$id}>
                  <p>{index + 1}</p>
                  <img src={movie.poster_url} alt={movie.title} />
                </li>
              ))}
            </ul>
          </section>
        )}

        <section className='all-movies'>
          <h2 className='mt-16'>Filmes Pupulares</h2>

          {isLoading ? (
            <Spinner />
          ) : errorMessages ? (
            <p className='text0red-500'>{errorMessages}</p>
          ) : (
            <ul>
              {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </ul>

          )}
        </section>
      </div>
    </main>
  )
}

export default App
