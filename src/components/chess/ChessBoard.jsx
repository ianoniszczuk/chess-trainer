import { useState } from 'react'
import useChessStore from "../../store/chessStore.jsx"
import { Chessboard  } from 'react-chessboard'

function MyChessBoard() {
  const { position, makeMove } = useChessStore()
  
  const handleMove = () => {
    // Simulamos una jugada (normalmente vendría del tablero real)
    const fakeMove = {
      san: 'e4',
      after: 'rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq e3 0 1'
    }
    makeMove(fakeMove)
  }
  
  return (
    <div className="bg-amber-100 p-6 rounded-lg">
      <h3 className="text-xl font-bold mb-4">Tablero de Ajedrez</h3>
        <div className='w-full max-w-xl mx-auto'>
          <Chessboard
             boardWidth={350}
          />
        </div>
      
    </div>
  )
}

export default MyChessBoard