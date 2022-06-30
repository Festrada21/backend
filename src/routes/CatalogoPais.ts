

import {Router} from 'express';
import TokenValidation from '../libs/validateToken';
import { GETCP, GETCPS, POSTCP, PUTCP, PUTCPD, PUTCPH } from '../controllers/CatalogoPais';


const routercp = Router();

routercp.get('/',TokenValidation,GETCPS);
routercp.get('/:id',TokenValidation,GETCP);
routercp.post('/',TokenValidation,POSTCP);
routercp.put('/:id',TokenValidation,PUTCP);
routercp.put('/h/:id',TokenValidation,PUTCPH);
routercp.put('/d/:id',TokenValidation,PUTCPD);

export default routercp;