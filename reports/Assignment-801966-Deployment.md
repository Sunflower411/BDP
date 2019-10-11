# This your assignment deployment report

it is a free form. you can add:

* 1. The data was originally bts data stored in csv file. Then I write some code to read it and then spilt and store in the mongodb which is a non-relational data base.
* 2.Maybe I will add a function to separate the data based on some values of the column which might have some realistic meaning.
* 3. Yes, I write a js file about this called dataingest.js
* 4. Please see the result in log.log and log-10.log. The speed will get lower with n gets higher.
* 5. Sometimes I didn't write the code well, when it has some error, there will cause a failure. But most of the time, it goes well. Mongodb is good at this kind of tasks, as well as with the asynchronized operations.

* How to run the code: (MongoDB shell version v4.2.0)
node dataingest.js 
node performancetest.js > log-10.log
