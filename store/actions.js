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
export const search = () => {
  return api().get('/pigment/search').then((res) => {
    console.log(res)
  }).catch((err) => { console.log(err) })
}
