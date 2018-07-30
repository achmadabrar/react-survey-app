const keys = require ('../config/keys');
const stripe = require ('stripe')(keys.stripeSecretKey);

module.exports = app => {
  app.post('/api/stripe', async (req,res)=>{
  //console.log(req.body);//  nge log semua request dari body stripe

    if(!req.user){
      return res.status(401).send({error:'Login terlebih dahulu!'})
    }

  const charge = await stripe.charges.create({
      amount:500,
      currency:'usd',
      description:'5$ for 2 credits',
      source: req.body.id
  });
  //request handler

  req.user.credits += 5;
  const user = await req.user.save();
  //update number of credits

  res.send(user);
  //send ke user model ketika ada request
  });
};  