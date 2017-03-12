export function setGreeting(greeting: string) {
    return {
        type: 'SET_GREETING',
        greeting: greeting,
    }
}