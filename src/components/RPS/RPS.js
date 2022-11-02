import React,{useState, useRef, useEffect} from 'react'
import './RPS.css'

function RPS() {

    const [StartGame, setStartGame] = useState(false)
    const [Win, setWin] = useState(0)
    const [Draw, setDraw] = useState(0)
    const [Lose, setLose] = useState(0)
    const [Flag, setFlag] = useState(true)
    const [Result, setResult] = useState('')
    const comImage = useRef()

    useEffect(() => {

        let tId
        //3번 이기거나 지면 승부가 난다.
        if(Win === 3){
            setResult("You Win!")
            gameReset()
        }else if(Lose === 3){
            setResult("You Lose...")
            gameReset()
        }else{
            tId = setTimeout(()=>{
                comImage.current.src = "./image/moving.gif"
                setFlag(true)
            }, 2000)
        }

        return () => {clearInterval(tId)}
    }, [Win, Draw, Lose])

    const startGameHandler = () => {
        setStartGame(!StartGame)
        setResult('')
    }

    const gameReset = () => {
        setWin(0)
        setLose(0)
        setDraw(0)
        setFlag(true)
        comImage.current.src = "./image/moving.gif"
        setStartGame(false)
    }

    const resultGame = (mySelect) => {

        if(Flag === false) return

        setFlag(false)

        const com = Math.floor(Math.random() * 3)

        if(com === 0){
            comImage.current.src = "./image/rock.png"
        }else if(com === 1){
            comImage.current.src = "./image/paper.png"
        }else{
            comImage.current.src = "./image/scissor.png"
        }

        switch(mySelect){
            case 0://rock
                if(com === 0){
                    setDraw(Draw + 1)
                }else if(com === 1){
                    setLose(Lose + 1)
                }else{
                    setWin(Win + 1)
                }
                break
            case 1://paper
                if(com === 0){
                    setWin(Win + 1)
                }else if(com === 1){
                    setDraw(Draw + 1)
                }else{
                    setLose(Lose + 1)
                }
                break
            case 2://scissor
                if(com === 0){
                    setLose(Lose + 1)
                }else if(com === 1){
                    setWin(Win + 1)
                }else{
                    setDraw(Draw + 1)
                }
                break
        }
    }

    return (
        <div className="game">
            <h1>RockPaperScissors</h1>
            <div className="computer"><img src={require('./image/moving.gif')} ref={comImage} alt="moving" /></div>
            <span style={{marginBottom:'10px', fontSize:'1.3rem',color:'blue'}}>{Result}</span>
            {
                StartGame?
                <>
                    <span style={{marginBottom:'10px', fontSize:'1.3rem'}}>{Win}승 {Lose}패</span>
                    <div className="rpsBtn" >
                        <div onClick={()=>{resultGame(0)}}><img src={require('./image/rock.png')} alt="rock" /></div>
                        <div onClick={()=>{resultGame(1)}}><img src={require('./image/paper.png')} alt="paper" /></div>
                        <div onClick={()=>{resultGame(2)}}><img src={require('./image/scissor.png')} alt="scissor" /></div>
                    </div>
                </>
                :<div className="startBtn" onClick={startGameHandler}>시작하기</div>
            }
        </div>
    )
}

export default RPS
