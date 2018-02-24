import AV from 'leancloud-storage'

AV.init({
    appId: 'jFxubcUYxlt4z3XtDCXit7M7-gzGzoHsz',
    appKey: 'yvxiyhmBz66Xoq0X6hyrww56'
})

const Link = AV.Object.extend('Link')
const LinkCat = AV.Object.extend('LinkCat')

const addLink = (info) => {
    let l = new Link()
    l.set('category', info.category)
    l.set('name', info.name)
    l.set('url', info.url)
    l.set('description', info.description)
    l.set('zan', 0)
    l.save().then(lnk => {
        console.success('new link:', lnk)
    }, err => {
        console.error('add link error:', err)
    })
}

const addCat = c => {
    let ca = new LinkCat()
    ca.set('name', c)
    ca.save().then(res => {
        console.log('new category:', Object.assign(res.attributes, {
            id: res.id
        }, {}))
    }, err => {
        console.error('add link category error:', err)
    })
}

const getCats = () => {
    return new Promise((resolve,reject) => {
        const queryCats = new AV.Query('LinkCat')
        queryCats.exists('name')
        queryCats.find().then(res => {
            console.log('getting link categories:', res)
            resolve(res)
        }, err => {
            console.error('get link categories error', err)
            reject(err)
        })
    })
}

module.exports = {
    addLink,
    addCat,
    getCats
}