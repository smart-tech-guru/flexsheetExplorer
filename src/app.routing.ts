




import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Application Routes. "data.caption" defines captions for navigation links in markup.
export const routes: Routes = [
    { path: '', redirectTo: 'intro', pathMatch: 'full' },
    { path: 'intro', data: { caption: 'Introduction' }, loadChildren: 'src/components/IntroCmp#IntroModule' },
    { path: 'dataBinding', data: { caption: 'Data Binding' }, loadChildren: 'src/components/DataBindingCmp#DataBindingModule' },
    { path: 'sorting', data: { caption: 'Sorting' }, loadChildren: 'src/components/SortingCmp#SortingModule' },
    { path: 'filtering', data: { caption: 'Filtering' }, loadChildren: 'src/components/FilteringCmp#FilteringModule' },
    { path: 'formatCells', data: { caption: 'Format Cells' }, loadChildren: 'src/components/FormatCellsCmp#FormatCellsModule' },
    { path: 'multipleHeaders', data: { caption: 'Multiple Headers' }, loadChildren: 'src/components/MultipleHeadersCmp#MultipleHeadersModule' },
    { path: 'cellMerging', data: { caption: 'Cell Merging' }, loadChildren: 'src/components/CellMergingCmp#CellMergingModule' },
    { path: 'dragDrop', data: { caption: 'Drag & Drop' }, loadChildren: 'src/components/DragDropCmp#DragDropModule' },
    { path: 'frozenCells', data: { caption: 'Frozen Cells' }, loadChildren: 'src/components/FrozenCellsCmp#FrozenCellsModule' },
    { path: 'formulas', data: { caption: 'Formulas' }, loadChildren: 'src/components/FormulasCmp#FormulasModule' },
    { path: 'customFunction', data: { caption: 'Custom Function' }, loadChildren: 'src/components/CustomFunctionCmp#CustomFunctionModule' },
    { path: 'excelIO', data: { caption: 'Excel I/O' }, loadChildren: 'src/components/ExcelIOCmp#ExcelIOModule' }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });

