import { remark } from 'remark'
import html from 'remark-html'

export async function formatPost(fileContents: string): Promise<string> {
  const processedContent = await remark().use(html).process(fileContents)

  const content = processedContent.toString()

  return content
}
