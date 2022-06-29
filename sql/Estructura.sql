USE master
GO


DROP DATABASE IF EXISTS DBTest;
CREATE DATABASE DBTest
GO


USE DBTest;
GO
DROP TABLE IF EXISTS Empleados;
CREATE TABLE Empleados
(
    empleadoId VARCHAR(100) NOT NULL DEFAULT newid() PRIMARY KEY,
    paisId INT NOT NULL,
    codigoEmpleado VARCHAR(256) NOT NULL,
    identificacionId INT NOT NULL,
    numeroIdentificacion VARCHAR(256) NOT NULL,
    nombres VARCHAR(256) NOT NULL,
    apellidos VARCHAR(256) NOT NULL,
    fechaNacimiento DATE NOT NULL,
    fechaAlta DATE NOT NULL,
    fechaBaja DATE,
    estadoId INT NOT NULL,
    generoId INT NOT NULL,
    UNIQUE(codigoEmpleado),UNIQUE(identificacionId,numeroIdentificacion)
);

DROP TABLE IF EXISTS CatalogoEstadoEmpleado;
CREATE TABLE CatalogoEstadoEmpleado
(
    estadoId INT NOT NULL IDENTITY(1,1) PRIMARY KEY,
    Nombre VARCHAR(100) NOT NULL,
    FechaEdicion DATETIME DEFAULT GETDATE(),
    Habilitado BIT NOT NULL DEFAULT 1,
    UNIQUE(Nombre)
);

DROP TABLE IF EXISTS CatalogoGeneroEmpleado;
CREATE TABLE CatalogoGeneroEmpleado
(
    generoId INT NOT NULL IDENTITY(1,1) PRIMARY KEY,
    Nombre VARCHAR(100) NOT NULL,
    FechaEdicion DATETIME DEFAULT GETDATE(),
    Habilitado BIT NOT NULL DEFAULT 1,
    UNIQUE(Nombre)
);

DROP TABLE IF EXISTS CatalogoIdentificacionEmpleado;
CREATE TABLE CatalogoIdentificacionEmpleado
(
    IdentificacionId INT NOT NULL IDENTITY(1,1) PRIMARY KEY,
    Nombre VARCHAR(100) NOT NULL,
    FechaEdicion DATETIME DEFAULT GETDATE(),
    Habilitado BIT NOT NULL DEFAULT 1,
    UNIQUE(Nombre)
);

DROP TABLE IF EXISTS CatalogoPais;
CREATE TABLE CatalogoPais
(
    PaisId INT NOT NULL IDENTITY(1,1) PRIMARY KEY,
    Nombre VARCHAR(100) NOT NULL,
    FechaEdicion DATETIME DEFAULT GETDATE(),
    Habilitado BIT NOT NULL DEFAULT 1,
    UNIQUE(Nombre)
);

DROP TABLE IF EXISTS DetalleFotoEmpleado;
CREATE TABLE DetalleFotoEmpleado
(
    FotoId INT NOT NULL IDENTITY(1,1) PRIMARY KEY,
    empleadoId VARCHAR(100) NOT NULL,
    Nombre VARCHAR(100) NOT NULL,
    Extension VARCHAR(100) NOT NULL,
    Ubicacion VARCHAR(100) NOT NULL    
);

DROP TABLE IF EXISTS Usuarios;
CREATE TABLE Usuarios
(
    usuarioId VARCHAR(100) DEFAULT newid() PRIMARY KEY,
    empleadoId VARCHAR(100) NOT NULL ,
    usuario VARCHAR(100) NOT NULL,
    email VARCHAR(256) NOT NULL,
    contraseña VARCHAR(256) NOT NULL,
    FechaEdicion DATETIME DEFAULT GETDATE(),
    Habilitado BIT NOT NULL DEFAULT 1,
    UNIQUE(empleadoId,usuario)
);

DROP TABLE IF EXISTS CatalogoPerfiles;
CREATE TABLE CatalogoPerfiles
(
    perfilId VARCHAR(100) NOT NULL DEFAULT newid() PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    FechaEdicion DATETIME DEFAULT GETDATE(),
    Habilitado BIT NOT NULL DEFAULT 1,
    UNIQUE(nombre)
);

DROP TABLE IF EXISTS UsuarioEnPerfiles;
CREATE TABLE UsuarioEnPerfiles
(
    Id VARCHAR(100) NOT NULL DEFAULT newid() PRIMARY KEY,
    perfilId VARCHAR(100) NOT NULL,
    usuarioId VARCHAR(100) NOT NULL,
    FechaEdicion DATETIME DEFAULT GETDATE(),
    Habilitado BIT NOT NULL DEFAULT 1,
    UNIQUE(perfilId,usuarioId)
);

DROP TABLE IF EXISTS CatalogoRutas;
CREATE TABLE CatalogoRutas
(
    IdRuta INT NOT NULL IDENTITY(1,1) PRIMARY KEY,
    perfilId VARCHAR(100) NOT NULL,
    Nivel INT NOT NULL,
    Ruta VARCHAR(100) NOT NULL,
    Icon VARCHAR(100) NOT NULL,
    Nombre VARCHAR(100) NOT NULL    
);

USE DBTest;
--Vistas
DROP VIEW IF EXISTS vw_Empleados;
GO
CREATE VIEW vw_Empleados AS
    SELECT
        e.empleadoId,
        e.codigoEmpleado,
        e.nombres,
        e.apellidos,
        e.fechaNacimiento,
        e.fechaAlta,
        e.fechaBaja,
        e.estadoId,
        e.generoId,
        e.paisId,
        e.identificacionId,
        e.numeroIdentificacion,
        p.Nombre AS Pais,
        i.Nombre AS Identificacion,
        ge.Nombre AS Genero,
        ee.Nombre AS Estado,
        f.Nombre AS Foto,
        u.usuario, 
        u.email,
        u.FechaEdicion,
        u.Habilitado
    FROM Empleados e
        INNER JOIN CatalogoPais p ON e.paisId = p.PaisId
        INNER JOIN CatalogoIdentificacionEmpleado i ON e.identificacionId = i.IdentificacionId
        INNER JOIN CatalogoGeneroEmpleado ge ON e.generoId = ge.generoId
        INNER JOIN CatalogoEstadoEmpleado ee ON e.estadoId = ee.estadoId
        LEFT JOIN Usuarios u ON e.empleadoId = u.empleadoId
        LEFT JOIN DetalleFotoEmpleado f ON e.empleadoId = f.empleadoId
GO