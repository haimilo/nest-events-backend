24. Introduction to ORMs

  ORM: Object-relational mapping
       Object-oriented abstraction for db schema
  
  TypeORM: ORM Library for NodeJS

  NestJS TypeORM Module: NestJS module providing TypeORM integration

  Entity: DB table mapped to a JS/TS class

  Repository: Providers data access for a specific Entity

  Query Builder: Allows building SQL queries in an object-oriented way.

26. Connecting to database

  Install Libaries:
    >> npm install --save @nestjs/typeorm typeorm mysql

28. The Entity (Primary Key and Column)

29. Repository Partten & Repository classes

  There are some methods:
     * save(): Create new or update an existing Entity
     * find(): Find many entities, optionally using criteria
     * findOne(): Find one entity - by ID, optionally using criteria
     * remove(): Remove an existing entity

30. TypeORM 3 Upgrade guide
  Method:
    * findOne(id) signature was dropped. use following syntax instead:
    This method use to fetch one entity from the database
    example:
      const user = await userRepository.findOneBy({
        id: id // where id is your column name
      })

    * There are some methods have changed:
      - findOne
      - findOneOrFail
      - find
      - count
      - findAndCount
    That all method above only accept FindOptions as parameter
    
      const users = await userRepository.find({
        where: { /* conditions */ },
        relations: { /* relations */ }
      })

    * To supply where conditions directly without FindOptions new methods were added:
      - findOneBy
      - findOneByOrFail
      - findBy
      - countBy
      - findAndCountBy

        const users = await userRepository.findBy({
          name: 'Harry'
        })

    * This change was required to simply current find* and count* methods typings, improve type safety and prevent user confusion.
      - findByIds was removed, use findBy method instead in conjuction with In operator, for example

        userRepository.findBy({
          id: In([1, 2, 3])
        })

34. Introduction of Pipes
  Define: Pipes is a proper programming concept in Nest

  * Input =goes in=> (check by: Validation, Tranformation and orther custom check) =goes out=> Result

  Nest comes with six pipes available out-of-the-box:
  * ValidationPipe
  * ParesIntPipe
  * ParseBoolPipe
  * ParseArrayPipe
  * ParseUUIDPipe
  * DefaultValuePipe

35. Input Validation

  First of all need to install the class validator and class transformer libararies by running

    >> npm i --save class-validator class-transformer

  These packages are needed for the validation pip, another kind of built in pipe will use.