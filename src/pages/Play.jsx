import MyChessBoard from '../components/chess/ChessBoard'

function Play() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-4xl font-bold text-center mb-8">♟️ Jugar</h1>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        <MyChessBoard />
        {/* Aquí irían tus otros componentes */}
      </div>
    </div>
  )
}

export default Play