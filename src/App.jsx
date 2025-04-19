import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import EngineeringToolsNew from './pages/EngineeringToolsNew';
import DocumentLibrary from './pages/DocumentLibrary';
import PrecastSystem from './pages/PrecastSystem';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import NotFound from './pages/NotFound';
import ConcreteCalculator from './pages/calculators/ConcreteCalculator';
import SteelBarCalculator from './pages/calculators/SteelBarCalculator';
import SteelPipesCalculator from './pages/calculators/SteelPipesCalculator';
import BricksCalculator from './pages/calculators/BricksCalculator';
import PlasterCalculator from './pages/calculators/PlasterCalculator';
import PaintCalculator from './pages/calculators/PaintCalculator';
import TilesCalculator from './pages/calculators/TilesCalculator';
import MortarMixCalculator from './pages/calculators/MortarMixCalculator';
import ExcavationCalculator from './pages/calculators/ExcavationCalculator';
import MaterialCost from './pages/tools/MaterialCost';
import LaborCost from './pages/tools/LaborCost';
import Support from './pages/support/Support';
import EquipmentCost from './pages/tools/EquipmentCost';
import TotalProjectCost from './pages/tools/TotalProjectCost';
import ShareExperience from './pages/support/ShareExperience';
import SuggestIdeas from './pages/support/SuggestIdeas';
import BuyCoffee from './pages/support/BuyCoffee';
import MonthlySupport from './pages/support/MonthlySupport';
import OrganizationSupport from './pages/support/OrganizationSupport';
import News from './pages/News';
import Events from './pages/Events';
import RoomArea from './pages/area/RoomArea';
import FloorArea from './pages/area/FloorArea';
import RoofArea from './pages/area/RoofArea';
import WallArea from './pages/area/WallArea';
import LandArea from './pages/area/LandArea';
import SteelSectionCalculator from './pages/design/SteelSectionCalculator';
import ConnectionDesign from './pages/design/ConnectionDesign';
import BasePlateCalculator from './pages/design/BasePlateCalculator';
import PlateCalculator from './pages/design/PlateCalculator';
import BeamPlateCalculator from './pages/design/BeamPlateCalculator';
import BeamDesignCalculator from './pages/design/BeamDesignCalculator';
import ColumnDesignCalculator from './pages/design/ColumnDesignCalculator';
import SlabDesignCalculator from './pages/design/SlabDesignCalculator';
import FootingDesignCalculator from './pages/design/FootingDesignCalculator';
import ShallowFoundationCalculator from './pages/design/ShallowFoundationCalculator';
import DeepFoundationCalculator from './pages/design/DeepFoundationCalculator';
import PileLoadCalculator from './pages/design/PileLoadCalculator';
import RetainingWallDesign from './pages/design/RetainingWallDesign';
import SheetPileDesign from './pages/design/SheetPileDesign';
import PrecastBeamConnection from './pages/design/PrecastBeamConnection';
import PrecastColumnConnection from './pages/design/PrecastColumnConnection';
import Courses from './pages/courses/Courses';
import Marketplace from './pages/marketplace/Marketplace';
import SubmitProduct from './pages/marketplace/SubmitProduct';
import CreateCourse from './pages/courses/CreateCourse';
import SuggestCourse from './pages/courses/SuggestCourse';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="engineering-tools" element={<EngineeringToolsNew />} />
        <Route path="document-library" element={<DocumentLibrary />} />
        <Route path="precast-system" element={<PrecastSystem />} />
        <Route path="courses" element={<Courses />} />
        <Route path="marketplace" element={<Marketplace />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="tools/concrete-calculator" element={<ConcreteCalculator />} />
        <Route path="tools/steel-bar-calculator" element={<SteelBarCalculator />} />
        <Route path="tools/steel-pipes-calculator" element={<SteelPipesCalculator />} />
        <Route path="tools/bricks-calculator" element={<BricksCalculator />} />
        <Route path="tools/plaster-calculator" element={<PlasterCalculator />} />
        <Route path="tools/paint-calculator" element={<PaintCalculator />} />
        <Route path="tools/tiles-calculator" element={<TilesCalculator />} />
        <Route path="tools/mortar-mix" element={<MortarMixCalculator />} />
        <Route path="tools/excavation-calculator" element={<ExcavationCalculator />} />
        <Route path="tools/material-cost" element={<MaterialCost />} />
        <Route path="tools/labor-cost" element={<LaborCost />} />
        <Route path="tools/equipment-cost" element={<EquipmentCost />} />
        <Route path="tools/total-project-cost" element={<TotalProjectCost />} />
        <Route path="support" element={<Support />} />
        <Route path="support/share-experience" element={<ShareExperience />} />
        <Route path="support/suggest-ideas" element={<SuggestIdeas />} />
        <Route path="support/buy-coffee" element={<BuyCoffee />} />
        <Route path="support/monthly-support" element={<MonthlySupport />} />
        <Route path="support/organization-support" element={<OrganizationSupport />} />
        <Route path="news" element={<News />} />
        <Route path="events" element={<Events />} />
        <Route path="tools/room-area" element={<RoomArea />} />
        <Route path="tools/floor-area" element={<FloorArea />} />
        <Route path="tools/roof-area" element={<RoofArea />} />
        <Route path="tools/wall-area" element={<WallArea />} />
        <Route path="tools/land-area" element={<LandArea />} />
        <Route path="tools/steel-section" element={<SteelSectionCalculator />} />
        <Route path="tools/connection-design" element={<ConnectionDesign />} />
        <Route path="tools/base-plate" element={<BasePlateCalculator />} />
        <Route path="tools/plate-calculator" element={<PlateCalculator />} />
        <Route path="tools/beam-plate-calculator" element={<BeamPlateCalculator />} />
        <Route path="tools/beam-design-calculator" element={<BeamDesignCalculator />} />
        <Route path="tools/column-design-calculator" element={<ColumnDesignCalculator />} />
        <Route path="tools/slab-design-calculator" element={<SlabDesignCalculator />} />
        <Route path="tools/footing-design-calculator" element={<FootingDesignCalculator />} />
        <Route path="tools/shallow-foundation-calculator" element={<ShallowFoundationCalculator />} />
        <Route path="tools/deep-foundation-calculator" element={<DeepFoundationCalculator />} />
        <Route path="tools/pile-load-calculator" element={<PileLoadCalculator />} />
        <Route path="tools/retaining-wall-design" element={<RetainingWallDesign />} />
        <Route path="tools/sheet-pile-design" element={<SheetPileDesign />} />
        <Route path="tools/precast-beam-connection" element={<PrecastBeamConnection />} />
        <Route path="tools/precast-column-connection" element={<PrecastColumnConnection />} />
        <Route path="submit-product" element={<SubmitProduct />} />
        <Route path="create-course" element={<CreateCourse />} />
        <Route path="suggest-course" element={<SuggestCourse />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
