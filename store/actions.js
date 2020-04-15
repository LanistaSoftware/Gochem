import api from './api'
export const addReferences = (vuexContext, reference) => {
  vuexContext.commit('setReferance', reference)
}
export const addAbout = (vuexContext, about) => {
  vuexContext.commit('setAboutUs', about)
}
export const addProduct = (vuexContext, product) => {
  vuexContext.commit('setProducts', product)
}
export const getAboutUs = ({
  commit
}) => {
  return api().get('/aboutUs').then((res) => {
    const about = res.data.aboutUsContent[0]
    commit('setAbout', about)
  }).catch((err) => { alert(err) })
}
export const search = ({ commit }, searchitem) => {
  return api().post('/search', searchitem).then((res) => {
    commit('setSearchItem', res.data)
  }).catch((err) => { alert(err) })
}
export const sectorData = ({ commit }) => {
  return api().get('/sector').then((res) => {
    commit('setSector', res.data.sectors)
  }).catch((err) => { alert(err) })
}
export const oneSector = ({ commit }, id) => {
  return api().get('/sector/' + id).then((res) => {
    commit('setAsector', res.data.sectorone)
    commit('sectoritemsset', res.data.sectorone)
  }).catch((err) => { alert(err) })
}
