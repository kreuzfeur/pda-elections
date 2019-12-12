import updateCandidates from './update-candidates';

const reducer = (state, action) => {
    return {
        candidates: updateCandidates(state, action),
        selectedCandidate: null
    }
}

export default reducer