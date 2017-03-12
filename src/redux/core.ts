export type Hello = {
    greeting: string,
}

export const Hello = {
    greeting: "hello olio",
}

export type AppState = {
    hello:      Hello,
}

export const AppState = {
    hello:      Hello,
}

export const INITIAL_STATE = AppState

export function updateGreeting(value: string): Hello {
    return {greeting: value}
}