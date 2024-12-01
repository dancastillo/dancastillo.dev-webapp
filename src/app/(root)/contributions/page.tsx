import { getContributions } from '@/lib/api/contribution/contribution'
import { Contribution } from '@/lib/api/contribution/contribution.mapper'
import Image from 'next/image'
import Link from 'next/link'

export default async function Contributions() {
  const contributions: Contribution[] = await getContributions()

  return (
    <>
      <section className="home_container">
        <h1 className="heading">Contributions</h1>
      </section>
      <div className="overflow-x-auto shadow-md rounded-lg">
        <table className="min-w-full divide-y divide-gray-200 text-sm text-gray-600">
          <thead className="bg-secondary-dark">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Title</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Type</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Repository
              </th>
            </tr>
          </thead>
          <tbody className="bg-navbar-dark divide-y divide-gray-200">
            {contributions.map((contribution, index) => (
              <tr key={index} className="hover:bg-secondary-dark transition duration-150">
                <td className="px-6 py-4 whitespace-nowrap text-white">
                  {new Date(contribution.createdAt).toLocaleDateString()}
                </td>
                <td className="px-6 py-4 font-medium text-blue-500 hover:text-blue-700 underline">
                  <a href={contribution.url} target="_blank" rel="noopener noreferrer">
                    {contribution.title}
                  </a>
                </td>
                <td className="px-6 py-4 capitalize text-white">{contribution.type}</td>
                <td className="px-6 py-4">
                  <a
                    href={contribution.repositoryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-700 underline"
                  >
                    {contribution.repositoryName}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="m-6 text-lg text-center text-gray-400">
        For more contributions check out my{' '}
        <a
          href="https://github.com/dancastillo"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-700 underline"
        >
          Github profile
        </a>
      </div>
      <section className="text-white flex items-center space-x-4 mb-5">
        Like my work? Why not buy me a coffee?
        <Link href="https://buymeacoffee.com/dancastillo" className="m-3" target="_blank" rel="noopener noreferrer">
          <Image
            src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png"
            alt="Buy Me A Coffee"
            width={150}
            height={100}
          />
        </Link>
      </section>
    </>
  )
}
