import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'

export function NotFoundPage() {
  return (
    <Card className="mx-auto max-w-md text-center">
      <p className="text-[56px] font-semibold leading-none text-obsidian dark:text-snow">404</p>
      <h1 className="mt-4 text-xl font-semibold text-obsidian dark:text-snow">Page not found</h1>
      <p className="mt-2 text-[14px] text-steel">That route does not exist.</p>
      <Button to="/" variant="primary" className="mt-6">
        Go home
      </Button>
    </Card>
  )
}
