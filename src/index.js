import logMessage from './js/logger';
import './style/index.css';
// Log message to console
logMessage('The Furnace is HOT')
// Needed for Hot Module Replacement
if (typeof (module.hot) !== 'undefined') {
    module.hot.accept() // eslint-disable-line no-undef  
}