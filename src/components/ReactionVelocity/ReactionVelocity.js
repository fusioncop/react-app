import React, {useState, useEffect} from 'react'
import './ReactionVelocity.css'

function ReactionVelocity() {

        const [Now, setNow] = useState('wait')
        const [Result, setResult] = useState(null)

        let startTime = 0
        let endTime = 0
    
    useEffect(() => {
        if(Now === 'ready'){
            timer()
        }else if(Now === 'now'){
            startTime = new Date()
        }
    }, [Now])

    const timer = () => {
        setTimeout(()=>{
            setNow('now')
        },Math.floor(Math.random() * 1000) + 2000)
    }

    const startGame = () => {
        setNow('ready')
        startTime = 0
        endTime = 0
        setResult(null)
    }

    const nowClick = () => {
        endTime = new Date()
        setResult(`${endTime - startTime}ms`)
        setNow('wait')
    }

    const readyClick = () => {
        alert('pressed too fast..')
    }

    const changeBtn = () => {
        if(Now === 'wait'){ //게임 시작
            return <div className="btn wait" onClick={startGame}>Start</div>
        }else if(Now === 'ready'){ //대기
            return <div className="btn ready" onClick={readyClick}>Wait..</div>
        }else if(Now === 'now'){ //클릭
            return <div className="btn now" onClick={nowClick}>Click!</div>
        }else{
            return
        }
    }

    return (
        <div className="game">
            <h1 style={{marginBottom:'20px'}}>Reaction rate measurement</h1>
            <span>{Result}</span>
            {changeBtn()}
        </div>
    )
}

export default ReactionVelocity
