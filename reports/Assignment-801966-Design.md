# This your assignment design report

it is a free form. you can add:

* your design
* your test result
* etc.
* Part 1 - Design (weighted factor for grades = 2)

* 1.I use MongoDB to store the data.Dataingest is used to read data from file and then write it into MongoDB.

* 2.The data is about 26 437 850 bytes.At least, we need two nodes. (https://docs.bitnami.com/oci-templates/infrastructure/mongodb/get-started/understand-cluster-config/)
* 3. I will use containers.
* 4. I will add another function to firstly estimate the size and other parameters of different users'data and then try to balance them when write in the server.
* 5. I had some experience using Azure before. I think it is quite good for individual or small companies. And if we do not have enough infrastructural resources for provisioning mysimbdp, maybe I should think a more efficient way to handle the data.
