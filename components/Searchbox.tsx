import { useState } from 'react'

export default function Searchbox({onQuery}) {
  const [author, setAuthor] = useState('')
  const [title, setTitle] = useState('')
  const [year, setYear] = useState('')
  const [publisher, setPublisher] = useState('')
  const [showAdvanced, setShowAdvanced] = useState(false)

  const handleSubmit = (e: any) => {
    e.preventDefault();
    onQuery(e.target.title.value);
    
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex items-center mb-4">
        <input
          type="text"
          name="title"
          className="w-full border border-gray-400 p-2 rounded-lg"
          placeholder="Rechercher dans le titre de l'ouvrage"
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
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Quel type de document</span>
            </label>
            <select className="select select-bordered">
              <option disabled selected>Choisissez un type de document</option>
              <option>Livre</option>
              <option>Magazine</option>
              <option>Film / documentaire</option>
              <option>Carte</option>
            </select>
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">What is your name?</span>
            </label>
            <input type="text" placeholder="Titre" className="input input-bordered w-full max-w-xs"
            value={title}
            onChange={e => setTitle(e.target.value)} />
          </div>
          <input
            type="text"
            value={author}
            onChange={e => setAuthor(e.target.value)}
            className="w-full border border-gray-400 p-2 rounded-lg"
            placeholder="Auteur"
          />
          <input
            type="text"
            value={year}
            onChange={e => setYear(e.target.value)}
            className="w-full border border-gray-400 p-2 rounded-lg"
            placeholder="Année"
          />
          <input
            type="text"
            value={publisher}
            onChange={e => setPublisher(e.target.value)}
            className="w-full border border-gray-400 p-2 rounded-lg"
            placeholder="Editeur"
          />
        </div>
      )}
    </form>
  )
}
