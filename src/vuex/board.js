const getBoardsApi = Promise.resolve([
  { id: 1, title: '첫번째', content: '블라블라' },
  { id: 2, title: '두번째', content: '랄라블라블라' },
]);

const state = {
  boards: [],
};

const getters = {
  getBoardById: (state, getters) => async (id) => {
    if (state.boards.length) {
      return state.boards.find(board => board.id === id);
    }
    const boards = await getBoardsApi;
    return boards.find(board => board.id === id);
  },
};

const mutations = {
  addAllBoards(state, boards) {
    state.boards = boards;
  },
  addBoard(state, card) {
    state.boards.push(card);
  },
  removeBoard(state, id) {
    const removeBoardIndex = state.boards.findIndex(b => b.id === id);
    state.boards.splice(removeBoardIndex, 1);
  },
};

const actions = {
  async loadBoards({ dispatch, commit, getters, rootGetters }, payload) {
    const boards = await getBoardsApi;
    commit('addAllBoards', boards);
  },
};

const board = { state, getters, mutations, actions, namespaced: true };
export default board;
