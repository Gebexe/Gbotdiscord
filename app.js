const Discord = require("discord.js");
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });
const TOKEN = process.env.token
const prefix = "!"
const superagent = require("superagent");
const http = require('http');
const { get } = require("superagent");
const request = require("superagent");
const { link } = require("fs");
const { info } = require("console");
const { env } = require("process");
//import {nombres,imagenesurl,desccustom} from './cartascustom.js'
client.on('message', message => {

    if(message.content.toLowerCase().includes('feliz jueves'))
	     message.channel.send("https://www.youtube.com/watch?v=BvtUSsok4JA");
	 });


client.on("message", async (message) => {
	if (message.author.bot) return;
	if (!message.content.startsWith(prefix)) return;
	
	let command = message.content.split(" ")[0];
	command = command.slice(prefix.length);
	args = message.content.split (" ")
    args = args.slice(1)
    args = args.join(" ")
   if (command === "waifu"){
	const { body } = await superagent
	.get('https://api.waifu.pics/sfw/waifu');
	const embed = new Discord.RichEmbed()
	.setTitle("Waifu <3")
	.setImage(body.url)
	message.channel.send({embed})
}
/*if (command === "r") { args= args.toLowerCase()

	const { body } = await superagent
	.get('https://anime-reactions.uzairashraf.dev/api/reactions/random?category='+ args);
	const embed = new Discord.RichEmbed()
	.setTitle(args)
	.setImage(body.reaction)
	message.channel.send({embed})
}*/
if (command === "pat"){
	const { body } = await superagent
	.get('https://api.waifu.pics/sfw/pat');
	const embed = new Discord.RichEmbed()
	.setTitle("(　´Д｀)ﾉ(´･ω･`)")
	.setImage(body.url)
	message.channel.send({embed})
}

   if (command === "nya") {
	   const { body } = await superagent
	   .get('aws.random.cat/meow');
	   const embed = new Discord.RichEmbed()
	   .setColor(0x954D23)
	   .setTitle("NYA")
	   .setImage(body.file)
	   message.channel.send({embed})
   }  
	
else if (command === "carta") {
		args = args.toLowerCase()
		if (args == "dotor gbx") {const embed = new Discord.RichEmbed()
		.setColor("#950B93")
		.setTitle(nombrescustom [0])
		.setDescription(desccustom[0])
		.setImage(imagenecustom[0])


		 message.channel.send(embed)}
		if (args == "flayn") {const embed = new Discord.RichEmbed()
			.setColor("#010209")
			.setTitle(nombrescustom [1])
			.setDescription(desccustom[1])
			.setImage(imagenecustom[1])
	
	
			 message.channel.send(embed)}
		if (args == "dinanis") {const embed = new Discord.RichEmbed()
				.setColor("#0F3AEC")
				.setTitle(nombrescustom [2])
				.setDescription(desccustom[2])
				.setImage(imagenecustom[2])
		
		
		return message.channel.send(embed)}
		if (args == "mantecol") {const embed = new Discord.RichEmbed()
			.setColor("#010209")
			.setTitle(nombrescustom [3])
			.setDescription(desccustom[3])
			.setImage(imagenecustom[3])
	
	
	message.channel.send(embed)}

	if (args == "mikon") {const embed = new Discord.RichEmbed()
			.setColor("#B8990E")
			.setTitle(nombrescustom [4])
			.setDescription(desccustom[4])
			.setImage(imagenecustom[4])
	
	
	message.channel.send(embed)}

	if (args == "mikon neko arc") {const embed = new Discord.RichEmbed()
		.setColor("#B8990E")
		.setTitle(nombrescustom [5])
		.setDescription(desccustom[5])
		.setImage(imagenecustom[5])


 message.channel.send(embed)}
if (args == "mikon meme") {const embed = new Discord.RichEmbed()
	.setColor("#FEFEFE")
	.setTitle(nombrescustom [6])
	.setDescription(desccustom[6])
	.setImage(imagenecustom[6])


    message.channel.send(embed)}
	args = args.split(' ').join("%20")
		if (args.length == 0) return message.channel.send('decime tu carta despues del comando !carta ejemplo "!carta dark magician"')
		//message.channel.send(args)
		//message.channel.send("hola")
		let linkyugi= "https://db.ygoprodeck.com/api/v7/cardinfo.php?name=" + args
		/*const { body } = await superagent
	   .get("https://db.ygoprodeck.com/api/v7/cardinfo.php?name=" + args);
	   const embed = new Discord.RichEmbed()
	   .setColor(0x954D23)
	   .setTitle(body.data)
	   .setImage(body.card_images.image_url)
	   let link = "https://db.ygoprodeck.com/api/v7/cardinfo.php?name=" + args
	   let {body} = await superagent 
	   .get(link)
	   let imagen_carta = body.data
	   message.channel.send(imagen_carta)*/
	   async function Carta(link, args) {
		const cartita= await superagent
		.get(link)
		.catch(error=> error.message)
		let comprobacion=cartita.body 
		if (comprobacion !== undefined){
		 //return console.log (cartita.text)
		 const descripcion = JSON.stringify(cartita.body.data)
		 const description = descripcion.replace(/(^\[)/, '')
		 const description2 = description.replace(/(\]$)/, '');
		 const desc = JSON.parse(description2)
		 const imagenes = JSON.stringify(desc ['card_images'][0])
		 const imagenesar = imagenes.replace(/(^\[)/, '')
		 const imagenesar2 = imagenesar.replace(/(\]$)/, '')
		 const imagenurl = JSON.parse (imagenesar2)
		 const urldeimagen = imagenurl ['image_url']
		 const descripcionultima = desc ['desc']
		 const name = desc ['name']
		 const tipodecarta = cartita.body.data[0].type
		 let color= "#E4DF4A"
		 if (tipodecarta === "Spell Card") {
			 color = "#14AB1F"
			 

		 };
		 if (tipodecarta === "Effect Monster") {
			 color = "#B8990E"
          };
		
	     if (tipodecarta === "Tuner Monster") {
			color = "#B8990E"
		 };

		 if (tipodecarta === "Normal Monster"){
			 color = "#DABE40"
			
		 };

		 if (tipodecarta === "Trap Card") {
			 color = "#D12375"
			
		 };
		 if (tipodecarta === "Synchro Monster") {
			 color = "#FEFEFE"
		
		 };
		 if (tipodecarta === "Fusion Monster") {
			color = "#950B93"
		};
		 if (tipodecarta === "XYZ Monster") {
			 color = "#010209"
		 };
		 if (tipodecarta === "Ritual Effect Monster") {
			 color = "#0F3AEC"
		 }
		 if (tipodecarta === "Pendulum Effect Monster") {
			 color = "#AAD01E"
		 }
		 if (tipodecarta === "Link Monster") {
			 color = "#14CAE7"
		 }

		 const embed = new Discord.RichEmbed()
	   .setColor(color)
	   .setTitle(name)
	   .setDescription(descripcionultima)
	   .setImage(urldeimagen)

		return  message.channel.send({embed})}
		else {
			let busqueda = await superagent
                .get("https://db.ygoprodeck.com/api/v7/cardinfo.php?fname=" + args)
                nombres = busqueda.body.data.slice(0,10).map(name => name.name)
				if (nombres.length == 1) {
					const descripcion = JSON.stringify(busqueda.body.data)
					const description = descripcion.replace(/(^\[)/, '')
					const description2 = description.replace(/(\]$)/, '');
					const desc = JSON.parse(description2)
					const imagenes = JSON.stringify(desc ['card_images'][0])
					const imagenesar = imagenes.replace(/(^\[)/, '')
					const imagenesar2 = imagenesar.replace(/(\]$)/, '')
					const imagenurl = JSON.parse (imagenesar2)
					const urldeimagen = imagenurl ['image_url']
					const descripcionultima = desc ['desc']
					const name = desc ['name']
					const tipodecarta = busqueda.body.data[0].type
					let color= "#E4DF4A"
					if (tipodecarta === "Spell Card") {
						color = "#14AB1F"
						
		   
					};
					if (tipodecarta === "Effect Monster") {
						color = "#B8990E"
					 };
					
					 if (tipodecarta === "Tuner Monster") {
						color = "#B8990E"
					 };
		   
					if (tipodecarta === "Normal Monster"){
						color = "#DABE40"
					   
					};
		   
					if (tipodecarta === "Trap Card") {
						color = "#D12375"
					   
					};
					if (tipodecarta === "Synchro Monster") {
						color = "#FEFEFE"
				   
					};
					if (tipodecarta === "Fusion Monster") {
					   color = "#950B93"
				   };
					if (tipodecarta === "XYZ Monster") {
						color = "#010209"
					};
					if (tipodecarta === "Ritual Effect Monster") {
						color = "#0F3AEC"
					}
					if (tipodecarta === "Pendulum Effect Monster") {
						color = "#AAD01E"
					}
					if (tipodecarta === "Link Monster") {
						color = "#14CAE7"
					}
		   
					const embed = new Discord.RichEmbed()
				  .setColor(color)
				  .setTitle(name)
				  .setDescription(descripcionultima)
				  .setImage(urldeimagen)

				} 

				else
				{
				const embed = new Discord.RichEmbed()
	           .setColor('#8A1390')
	            .setTitle('No encontre tu cartita aca tenes que quizas sean la que querias')
	           .setDescription(nombres)
			      } 
                return  message.channel.send({embed})
		}
	    }
        };
     Carta(linkyugi,args)}

);


client.login(TOKEN);
//lala 