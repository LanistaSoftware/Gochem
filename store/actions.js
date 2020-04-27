import api from './api'
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
  }).catch()
}
export const getActiveSlide = ({ commit }) => {
  return api().get('slide/active/slide').then((res) => {
    commit('setActionActiveSlide', res.data.slide[0])
  }).catch((err) => { alert(err) })
}
export const getVideoId = ({ commit }) => {
  return api().get('video').then((res) => {
    commit('setVideoId', res.data.sliders[0].videopath)
  }).catch((err) => { alert(err) })
}
export const getReferencesAction = ({ commit }) => {
  return api().get('reference').then((res) => {
    commit('setReferences', res.data.references)
  }).catch((err) => { alert(err) })
}
export const getProducts = ({ commit }) => {
  return api().get('product').then((res) => {
    commit('setProduct', res.data.products)
  })
}
export const getEmploye = ({ commit }) => {
  return api().get('employe').then((res) => {
    res.data.employes.map((item) => {
      if (item.order === '0') {
        commit('setEmployezero', item)
      }
      if (item.order === '1') {
        commit('setEmployeone', item)
      }
    })
  })
}
export const getOneProduct = ({ commit }, id) => {
  return api().get('product/' + id).then((res) => {
    commit('setProductOne', res.data.productone)
  })
}
export const getBlogs = ({ commit }) => {
  return api().get('/blog').then((res) => {
    commit('setBlogs', res.data.blogs)
  })
}
export const getBlog = ({ commit }, id) => {
  return api().get('/blog/' + id).then((res) => {
    commit('setBlog', res.data.blogs[0].content)
  })
}
export const getPigments = ({ commit }) => {
  return api().get('/pigment/').then((res) => {
    commit('setPigments', res.data.pigments)
  })
}
export const getDocuments = ({ commit }) => {
  return api().get('/document/').then((res) => {
    commit('setDocuments', res.data.documents)
  })
}
export const getDocument = ({ commit }, id) => {
  return api().get('/document/' + id).then((res) => {
    commit('setDocument', res.data.documentone)
  })
}
// eslint-disable-next-line no-empty-pattern
export const sendCommunication = ({}, item) => {
  return api().post('communication', item).then((res) => {
  })
}
// eslint-disable-next-line no-empty-pattern
export const sendMail = ({}, item) => {
  return api().post('communication/mail', item).then((res) => {
  })
}
export const getGalery = ({ commit }) => {
  return api().get('galery').then((res) => {
    commit('setGalery', res.data.sectorImages)
  })
}
// eslint-disable-next-line no-empty-pattern
export const getContact = ({ commit }) => {
  return api().get('contact').then((res) => {
    commit('setInfo', res.data.contacts[0])
  })
}
