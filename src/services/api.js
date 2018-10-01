import { initialize, setListener, pushData } from "./firebase";

const mockMessages = [
    {
        incoming: true,
        message: "Hi Owen"
    },
    {
        incoming: false,
        message: "Hi, Vader"
    },
    {
        incoming: true,
        message: "When we will learn real data fetching?"
    },
    {
        incoming: false,
        message: "First we need to learn debugging and testing, then we will learn styling and animations and then we will learn real data fetching. Let's use this mock data for now ok?"
    }
];

export const getMockData = () => (
    new Promise(resolve => setTimeout(() => resolve(mockMessages), 1000))
)

export const initApi = () => initialize();

export const getMessages = (updaterFn) => setListener("messages", updaterFn);

export const postMessage = (message) => {
    if(Boolean(message)) {
        pushData("messages", {
            incoming: false,
            message
        })
    }
};