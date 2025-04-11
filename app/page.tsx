import Game from './components/Game'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black">
      <h1 className="text-white">Created By Dipanjan Dhar</h1>
      <Game />
    </main>
  )
}
