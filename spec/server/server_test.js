import {expect} from 'chai';
import request from 'supertest-as-promised';

var app = require('../../src/server/server.js')

describe('', function() {


  describe('Projects:', function(){

    var client = null

    beforeEach(function(){      
      client = request.agent(app)

    });
    it('adds a project,', function() {
      return client
        .post('/api/projects')
        .send({
          proj_name: 'Overlord',
          user_name: 'mikemfleming',
          start: 72916,
          due: 80216,
          status: 'started'
        }).expect(201)
    });

    it('gets a project by username', function(){
      return client
        .get('/api/projects/mikemfleming')
        .expect(200)
    })

    it('updates a project status', function(){
      return client
        .patch('/api/projects/status/1')
        .send({
          status: 'complete'
        })
        .expect(200)
    })

    it('updates a project start date', function(){
      return client
        .patch('/api/projects/start/1')
        .send({
          start: 122516
        })
        .expect(200)
    })

    it('updates a project due date', function(){
      return client
        .patch('/api/projects/due/1')
        .send({
          due: 10117
        })
        .expect(200)
    })

    it('deletes a project', function(){
      return client
        .delete('/api/projects/2')
        .expect(200)
    })

  }); 

  describe('Resources: ', function(){

    var client = null

    beforeEach(function(){
      client = request.agent(app)
    })

    it('adds a resource', function(){
      return client
        .post('/api/resources')
        .send({
          res_name: 'Olaf',
          proj_id: 1,
          company: 'Olaf Corp'
        })
    })

    it('gets all resources for a company', function(){
      return client
        .get('/api/resources/Olaf-Corp')
        .expect(200)
    })

    it("updates a resource's assigned project", function(){
      return client
        .patch('/api/resources/project/1')
        .send({
          proj_id: 2000
        })
        .expect(200)
    })

  })


});
