const MongoClient = require('mongodb').MongoClient
const fs = require('fs')
const _ = require('lodash')

let fields =[]

const dbName = 'mysimbdp'
const url = 'mongodb://localhost:27017'
MongoClient.connect(url).then((client)=>{
                              const collection = client.db(dbName).collection('data')
                              const csv = fs.readFileSync('../data/data.csv').toString()
                              const start = new Date().getTime()
                              const lines = csv.split(/\n/)
                              fields = lines[0].split(',')
                              
                              const lineToObject = (line) =>{
                              const words = line.split(',')
                              let obj = {}
                              
                              
                              
                              for(let i=0; i<fields.length -1 ; i++ ) {
                              
                              const key = fields[i]
                              obj[key] = words[i]
                              
                              
                              }
                              return obj
                              
                              }
                          
                              const chunked = _.chunk(lines, 500)
                              
                              chunked.forEach( async c =>  {
                                              const objArr = c.map(lineToObject)
                                              const res = await collection.insertMany(objArr)
                                         
                                              })
                              
                       
                              const end = new Date().getTime()
                              console.info(end-start, "Process Time")
                              }).catch(e => {
                                       console.log(e)
                                  console.log('Fail to connect')
                                       })
