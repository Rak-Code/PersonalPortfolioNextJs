"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, Star, GitFork, Code, Activity } from "lucide-react"
import Link from "next/link"
import { FadeInSection } from "./animations/fade-in-section"

interface Repository {
  name: string
  description: string
  html_url: string
  stargazers_count: number
  forks_count: number
}

export default function GithubProfile() {
  const [repos, setRepos] = useState<Repository[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch("https://api.github.com/users/Rak-Code/repos")

        if (!response.ok) {
          throw new Error("Failed to fetch repositories")
        }

        const data = await response.json()
        // Sort repositories by stars and get top 3
        const sortedRepos = data.sort((a: Repository, b: Repository) => 
          b.stargazers_count - a.stargazers_count
        )
        setRepos(sortedRepos.slice(0, 1))
        setLoading(false)
      } catch (err) {
        setError("Failed to load GitHub repositories")
        setLoading(false)
      }
    }

    fetchRepos()
  }, [])

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[300px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center py-10">
        <p className="text-muted-foreground mb-4">{error}</p>
        <Link href="https://github.com/Rak-Code" target="_blank">
          <Button className="transition-all duration-300 hover:scale-105">
            <Github className="mr-2 h-4 w-4" />
            Visit GitHub Profile
          </Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-4 md:gap-6">
        <Card className="w-full flex-1 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-accent rounded-lg">
                <Activity className="h-5 w-5" />
              </div>
              <div>
                <CardTitle>GitHub Contributions</CardTitle>
                <CardDescription>My recent activity on GitHub</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="overflow-x-auto">
            <div className="flex justify-center bg-card/50 p-2 md:p-4 rounded-lg border border-border min-w-[300px]">
              <img
                src={`https://ghchart.rshah.org/Rak-Code`}
                alt="GitHub Contribution Graph"
                className="w-full h-auto"
              />
            </div>
          </CardContent>
        </Card>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-4 flex items-center gap-2">
        <Code className="h-5 w-5 text-primary" />
        Top Repositories
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {repos.map((repo) => (
          <Card key={repo.name} className="flex flex-col h-full min-h-[200px] transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-accent rounded-lg">
                  <Github className="h-5 w-5" />
                </div>
                <div>
                  <CardTitle className="truncate">{repo.name}</CardTitle>
                  <CardDescription className="line-clamp-2 h-10">
                    {repo.description || "No description available"}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="flex-grow p-4">
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <Star className="mr-1 h-4 w-4 text-yellow-500" />
                  <span>{repo.stargazers_count}</span>
                </div>
                <div className="flex items-center">
                  <GitFork className="mr-1 h-4 w-4 text-green-500" />
                  <span>{repo.forks_count}</span>
                </div>
              </div>
            </CardContent>
            <div className="p-4">
              <Link href={repo.html_url} target="_blank" className="w-full">
                <Button variant="outline" className="w-full transition-all duration-300 hover:scale-105">
                  <Github className="mr-2 h-4 w-4" />
                  View Repository
                </Button>
              </Link>
            </div>
          </Card>
        ))}
      </div>

      <div className="flex justify-center mt-6">
        <Link href="https://github.com/Rak-Code" target="_blank">
          <Button className="transition-all duration-300 hover:scale-105">
            <Github className="mr-2 h-4 w-4" />
            View All Repositories
          </Button>
        </Link>
      </div>
    </div>
  )
}

