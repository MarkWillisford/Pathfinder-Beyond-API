/* // describe('Shift POST endpoint', function(){});
describe('Shift POST endpoint', function(){
  it('should return 201 with matching data', function(){
    return chai.request(app)
      .get('/api/users')
      .set('Authorization', `Bearer ${token}`)
      .then(function(res){
        let testUserID = res.body._id;
        let data = generateShiftData(testUserID);
        return chai.request(app)
        .post('/api/shifts')
        .send(data)
        .then(function(res){
          expect(res).to.have.status(201);
          expect(res).to.be.json;
          expect(res.body).to.be.a('object');
          expect(res.body).to.have.keys('id', 'user', 'date', 'day', 'shift', 'food', 
            'alcoholicBeverages', 'roomCharges', 'guests', 'support', 'bar', 'servers', 
            'kitchen', 'netTips', 'hours');
          expect(res.body.id).to.not.be.null;					
          expect(res.body.user).to.not.be.null;
          expect(new Date(res.body.date).toISOString()).to.equal(data.date.toISOString());	
          expect(res.body.day).to.equal(data.day);
          expect(res.body.shift).to.equal(data.shift);
          expect(res.body.food).to.equal(data.food);
          expect(res.body.alcoholicBeverages).to.equal(data.alcoholicBeverages);
          expect(res.body.roomCharges).to.equal(data.roomCharges);
          expect(res.body.guests).to.equal(data.guests);
          expect(res.body.support).to.equal(data.support);
          expect(res.body.bar).to.equal(data.bar);
          expect(res.body.servers).to.equal(data.servers);
          expect(res.body.kitchen).to.equal(data.kitchen);
          expect(res.body.netTips).to.equal(data.netTips);
          expect(res.body.hours).to.equal(data.hours);
        });
      });
  });
}); */