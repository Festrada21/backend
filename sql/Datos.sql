USE DBTest;
BEGIN
INSERT INTO CatalogoEstadoEmpleado VALUES ('Activo',GETDATE(), 1);
INSERT INTO CatalogoEstadoEmpleado VALUES ('Inactivo',GETDATE(), 1);
END

USE DBTest;
BEGIN
INSERT INTO CatalogoGeneroEmpleado VALUES ('Masculino',GETDATE(), 1);
INSERT INTO CatalogoGeneroEmpleado VALUES ('Femenino',GETDATE(), 1);
END

USE DBTest;
BEGIN
INSERT INTO CatalogoIdentificacionEmpleado VALUES ('Cedula',GETDATE(), 1);
INSERT INTO CatalogoIdentificacionEmpleado VALUES ('Pasaporte',GETDATE(), 1);
INSERT INTO CatalogoIdentificacionEmpleado VALUES ('Tarjeta de Identidad',GETDATE(), 1);
END

USE DBTest;
BEGIN
INSERT INTO CatalogoPais VALUES ('Guatemala',GETDATE(), 1);
INSERT INTO CatalogoPais VALUES ('Honduras',GETDATE(), 1);
INSERT INTO CatalogoPais VALUES ('El Salvador',GETDATE(), 1);
INSERT INTO CatalogoPais VALUES ('Mexico',GETDATE(), 1);
END


USE DBTest;
BEGIN
INSERT INTO CatalogoPerfiles VALUES (newid(),'Admin', GETDATE(), 1);
INSERT INTO Empleados VALUES (newid(),'1','123','1','111111','Francisco','Estrada','1988-08-21','2015-04-01',NULL,'1','1');
END

USE DBTest;
BEGIN
INSERT INTO CatalogoRutas(perfilId,Nivel,Ruta,Icon,Nombre)
(SELECT perfilId, '1', '/','arrow_drop_down_circle_outlined ','Menu 1' FROM CatalogoPerfiles WHERE Nombre = 'Admin');
INSERT INTO CatalogoRutas(perfilId,Nivel,Ruta,Icon,Nombre)
(SELECT perfilId, '2', '/home','folder_open ','Home' FROM CatalogoPerfiles WHERE Nombre = 'Admin');
INSERT INTO CatalogoRutas(perfilId,Nivel,Ruta,Icon,Nombre)
(SELECT perfilId, '2', '/about','perm_device_information_outlined ','About' FROM CatalogoPerfiles WHERE Nombre = 'Admin');
END