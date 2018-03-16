import AV from 'leancloud-storage'

AV.init({
    appId: 'jFxubcUYxlt4z3XtDCXit7M7-gzGzoHsz',
    appKey: 'yvxiyhmBz66Xoq0X6hyrww56'
})

const Link = AV.Object.extend('Link')
const LinkCat = AV.Object.extend('LinkCat')

const addLink = (info) => {
    return new Promise((resolve, reject) => {
        let l = new Link()
        l.set('categoryId', info.category)
        l.set('name', info.name)
        l.set('url', info.url)
        l.set('description', info.description)
        l.set('zan', 0)
        l.save().then(lnk => {
            console.success('new link:', lnk)
            resolve(lnk)
        }, err => {
            console.error('add link error:', err)
            reject(err)
        })
    })
}

const addCat = c => {
    return new Promise((resolve, reject) => {
        let ca = new LinkCat()
        ca.set('name', c)
        ca.save().then(res => {
            let result = Object.assign(res.attributes, {
                id: res.id
            }, {})
            console.log('new category:', result)
            resolve(result)
        }, err => {
            console.error('add link category error:', err)
            reject(err)
        })
    })
}

const getCats = () => {
    return new Promise((resolve,reject) => {
        const queryCats = new AV.Query('LinkCat')
        queryCats.exists('name')
        queryCats.find().then(res => {
            // console.log('getting link categories:', res)
            let list = res.map(item => {
                return Object.assign(item.attributes, {
                    id: item.id,
                    urls: []
                }, {})
            })
            resolve(list)
        }, err => {
            console.error('get link categories error', err)
            reject(err)
        })
    })
}

const getLinks = (id) => {
    return new Promise((resolve,reject) => {
        const queryLinks = new AV.Query('Link')
        queryLinks.exists('name')
        queryLinks.equalTo('categoryId',id)
        queryLinks.find().then(res => {
            console.log('get links under cat:',res)
            let list = res.map(item => {
                return item.attributes
            })
            resolve(list)
        }, err => {
            console.error('get cat links error', err);
            reject(err)
        })
    })
}

module.exports = {
    addLink,
    addCat,
    getCats,
    getLinks,
}