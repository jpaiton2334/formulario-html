<form action="enviar_email.php" method="post"  enctype="multipart/form-data" name="formulario">
   <label>Nombre</label><br />
   <input type="text" name="nombre" size="40" /><br />
	
   <label>Email</label><br />
   <input type="text" name="email" size="40" /><br />
	
   <label>Comentario</label><br />
   <textarea name="comentario" rows="5" cols="30"></textarea><br />

   <label>Selecciona un fichero</label><br />
   <input name="fichero" type="file" size="40" /><br />
   <br />
   <input name="enviar" type="submit" value="Enviar" /> <!--Si no se pone name no funciona, 
                                        porque el input para el fichero no lo reconoce como name -->
</form>