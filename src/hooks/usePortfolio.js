import { useState, useEffect, useCallback } from 'react'
import portfolioData from '../data/portfolio.json'

export const usePortfolio = () => {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchItems = useCallback(async () => {
    setLoading(true)
    try {
      // 1. Fetch projects from GitHub
      const res = await fetch('https://api.github.com/users/Amit-Patel01/repos?sort=updated&per_page=6')
      if (!res.ok) throw new Error('Failed to fetch from GitHub')
      const repos = await res.json()

      // 2. Format GitHub repos to match portfolio item structure
      const githubProjects = repos.map((repo, i) => {
        const colors = [
          'from-cyan-400 to-blue-500',
          'from-fuchsia-500 to-pink-500',
          'from-violet-500 to-purple-600',
          'from-emerald-400 to-teal-500'
        ]
        
        return {
          id: repo.id.toString(),
          type: 'project',
          title: repo.name.replace(/-/g, ' '),
          description: repo.description || 'A cool project from my GitHub.',
          image: `https://opengraph.githubassets.com/1/${repo.full_name}`, // Auto-generates an image for the repo
          tags: repo.topics && repo.topics.length > 0 ? repo.topics : (repo.language ? [repo.language] : ['Code']),
          link: repo.homepage || repo.html_url,
          github: repo.html_url,
          featured: i < 2,
          color: colors[i % colors.length]
        }
      })

      // Combine and set items
      setItems(githubProjects)
      setError(null)
    } catch (err) {
      console.error("Error fetching portfolio items:", err)
      // Fallback to static data if GitHub fails
      setItems(portfolioData.items || [])
      setError('Could not load live GitHub projects, showing cached data.')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchItems()
  }, [fetchItems])

  const addItem = async (item) => {
    const newItem = { ...item, id: Math.random().toString(36).substr(2, 9) }
    setItems(prev => [newItem, ...prev])
    return newItem
  }

  const updateItem = async (id, updates) => {
    const updated = { id, ...updates }
    setItems(prev => prev.map(i => i.id === id ? { ...i, ...updates } : i))
    return updated
  }

  const deleteItem = async (id) => {
    setItems(prev => prev.filter(i => i.id !== id))
  }

  return { items, loading, error, addItem, updateItem, deleteItem, refetch: fetchItems }
}
