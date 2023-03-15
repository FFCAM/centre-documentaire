import { useState } from 'react'

export default function Searchbox() {
    const [query, setQuery] = useState('')
    const [author, setAuthor] = useState('')
    const [title, setTitle] = useState('')
    const [showAdvanced, setShowAdvanced] = useState(false)
  
    const handleSubmit = e => {
      e.preventDefault()
      // Perform the search using the query, author, and title values
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <div className="flex items-center mb-4">
          <input
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            className="w-full border border-gray-400 p-2 rounded-lg"
            placeholder="Rechercher"
          />
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded-lg ml-2">
            Rechercher
          </button>
        </div>
        <button
          type="button"
          onClick={() => setShowAdvanced(!showAdvanced)}
          className="text-sm text-blue-500 underline cursor-pointer mb-4"
        >
          Recherche avancée
        </button>
        {showAdvanced && (
          <div className="mb-4">
            <input
              type="text"
              value={title}
              onChange={e => setTitle(e.target.value)}
              className="w-full border border-gray-400 p-2 rounded-lg mb-2"
              placeholder="Titre"
            />
            <input
              type="text"
              value={author}
              onChange={e => setAuthor(e.target.value)}
              className="w-full border border-gray-400 p-2 rounded-lg"
              placeholder="Auteur"
            />
          </div>
        )}
      </form>
    )
}
