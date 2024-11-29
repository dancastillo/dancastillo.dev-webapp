import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'
import Image from 'next/image'
import { getGitHubUserProfileUrl } from '@/lib/api/github/user'

export default async function Contact() {
  const profileImageUrl = await getGitHubUserProfileUrl()
  return (
    <>
      <div className="flex items-center justify-center h-screen bg-cover bg-center">
        <div className="flex flex-col min-w-[300px] items-center text-center bg-secondary-dark p-8 rounded-lg">
          <Image src={profileImageUrl} alt="Profile Picture" width={150} height={150} className="rounded-full" />
          <h1 className="text-3xl text-white font-semibold mt-4">Dan Castillo</h1>
          <p className="text-sm text-gray-300">Software Engineer</p>

          <div className="flex space-x-6 mt-6">
            <a
              href="https://github.com/dancastillo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400"
            >
              <FaGithub size={32} />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/daniel-castillo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400"
            >
              <FaLinkedin size={32} />
            </a>
            <a href="mailto:dancastillo99@gmail.com" className="text-white hover:text-gray-400">
              <FaEnvelope size={32} />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
