import {Router} from 'express';
import {
deleteCatalogopais,
getCatalogopais,
getCatalogopaises,
postCatalogopais,
putCatalogopais,
} from '../controllers/catalogopais_controllers';

const router = Router();

router.get('/',getCatalogopaises);
router.get('/:id',getCatalogopais);
router.post('/',postCatalogopais);
router.put('/:id',putCatalogopais);
router.delete('/:id',deleteCatalogopais);

export default router;