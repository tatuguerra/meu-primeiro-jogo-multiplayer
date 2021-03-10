export default function createKeyboardListner() {
    const state = {
        observers: []
    }

    function subscribe(observerFunction) {
        state.observers.push(observerFunction)
    }

    function notifyAll(command) {
        console.log(`Notifyind ${state.observers.length} observers`)

        for(const observerFunction of state.observers){
            observerFunction(command)
        }
    }

    document.addEventListener('keydown', handleKeyDown) 
    
    function handleKeyDown(event) {
        const keyPressed = event.key
        
        const command = {
            playerId: 'player1',
            keyPressed: keyPressed
        }

        notifyAll(command)
    }
    return {
        subscribe
    }
}

