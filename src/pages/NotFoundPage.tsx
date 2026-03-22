import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'

export function NotFoundPage() {
  return (
    <Card className="text-center">
      <h1 className="text-xl font-semibold text-gray-900 dark:text-white">Page not found</h1>
      <p className="mt-2 text-gray-600 dark:text-gray-400">That route does not exist.</p>
      <Button to="/" variant="primary" className="mt-6">
        Go home
      </Button>
    </Card>
  )
}
