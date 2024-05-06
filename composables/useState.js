export const useSelectedColor = () => useState('selected-color', () => "")
export const useAvailableColors = () => useState('available-colors', () => [
    'red',
    'yellow',
    'blue',
    'black',
    'white'
])