import { create } from 'zustand'

const useChessStore = create((set, get) => ({
  // 🎯 Estado del juego
  position: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
  gameHistory: [],
  currentMoveIndex: -1,
  
  // 🤖 Estado del análisis
  analysis: null,
  bestMoves: [],
  evaluation: 0,
  
  // 🧠 Estado de la IA
  aiExplanation: '',
  isAnalyzing: false,
  
  // 🎮 Acciones principales
  makeMove: async (move) => {
    const state = get()
    
    // Actualizar posición e historial
    set({
      position: move.after,
      gameHistory: [...state.gameHistory, move],
      currentMoveIndex: state.currentMoveIndex + 1,
      isAnalyzing: true,
      aiExplanation: 'Analizando jugada...'
    })
    
    // TODO: Aquí llamaremos a Stockfish y la IA
    // const analysis = await analyzePosition(move.after)
    // const explanation = await getAIExplanation(move, analysis)
    
    // Por ahora, simulamos:
    setTimeout(() => {
      set({
        analysis: { score: Math.random() * 2 - 1 }, // Score aleatorio
        evaluation: Math.random() * 2 - 1,
        aiExplanation: `La jugada ${move.san} es interesante porque...`,
        isAnalyzing: false
      })
    }, 1000)
  },
  
  resetGame: () => set({
    position: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
    gameHistory: [],
    currentMoveIndex: -1,
    analysis: null,
    aiExplanation: '',
    evaluation: 0
  })
}))

export default useChessStore