export const setSlideSets = (state, slide) => {
  state.slideSets = slide
}
export const setSlideIndex = (state, index) => {
  state.slideIndex = index
}
export const changeSlideIndex = (state, customSlideIndex) => {
  state.customSlideIndex = customSlideIndex
}
export const setAboutUs = (state, about) => {
  state.aboutUs = about
}
export const setProducts = (state, product) => {
  state.products = product
}
export const setAbout = (state, about) => {
  state.About = about
}
export const setSearchItem = (state, value) => {
  state.search = value
}
export const setSector = (state, value) => {
  state.sectors = value
}
export const setAsector = (state, value) => {
  state.sector = value
}
export const setActiveSlide = (state, value) => {
  state.slideactive = value
}
export const sectoritemsset = (state, value) => {
  state.sectoritems = value
}
export const setActionActiveSlide = (state, value) => {
  state.slideSets[0].header = value.SliderOne.titleOne
  state.slideSets[0].content = value.SliderOne.descriptionOne
  state.slideSets[0].imageUrl = state.imgurl + value.SliderOne.imageurlOne
  state.slideSets[1].header = value.SliderTwo.titleTwo
  state.slideSets[1].content = value.SliderTwo.descriptionTwo
  state.slideSets[1].imageUrl = state.imgurl + value.SliderTwo.imageurlTwo
  state.slideSets[2].header = value.SliderThree.titleThree
  state.slideSets[2].content = value.SliderThree.descriptionThree
  state.slideSets[2].imageUrl = state.imgurl + value.SliderThree.imageurlThree
}
export const setVideoId = (state, value) => {
  state.videoid = value
}
export const setReferences = (state, value) => {
  state.references = value
}

export const setEmployezero = (state, zero) => {
  state.employezero.push(zero)
}
export const setEmployeone = (state, one) => {
  state.employeone.push(one)
}
export const setNullemploye = (state) => {
  state.employeone = []
  state.employezero = []
}
export const setProduct = (state, value) => {
  state.product = value
}
export const setProductOne = (state, value) => {
  state.productone = value
}
export const setBlogs = (state, value) => {
  state.blogs = value
}
export const setBlog = (state, value) => {
  state.blog = value
}
export const setPigments = (state, value) => {
  state.pigments = value
}
export const setDocuments = (state, value) => {
  state.documents = value
}
export const setDocument = (state, value) => {
  state.document = value
}
export const setpigmentShow = (state, value) => {
  state.pigmentShow = value
}
