<?php
   
namespace App\Http\Controllers\API;
   
use Illuminate\Http\Request;
use App\Http\Controllers\API\BaseController as BaseController;
use Validator;
use App\Models\Space;
use App\Http\Resources\Space as SpaceResource;
   
class SpaceController extends BaseController
{

    public function index()
    {
        $spaces = Space::all();
        return $this->sendResponse(SpaceResource::collection($spaces), 'Posts fetched.');
    }

    
    public function store(Request $request)
    {
        $input = $request->all();
        $validator = Validator::make($input, [
            'user_id' => 'required',
            'data' => 'required'
        ]);
        if($validator->fails()){
            return $this->sendError($validator->errors());       
        }
        $space = Space::create($input);
        return $this->sendResponse(new SpaceResource($space), 'Post created.');
    }

   
    public function show($id)
    {
        $space = Space::find($id);
        if (is_null($space)) {
            return $this->sendError('Post does not exist.');
        }
        return $this->sendResponse(new SpaceResource($space), 'Post fetched.');
    }
    

    public function update(Request $request, Space $space)
    {
        $input = $request->all();

        $validator = Validator::make($input, [
            'user_id' => 'required',
            'data' => 'required'
        ]);

        if($validator->fails()){
            return $this->sendError($validator->errors());       
        }

        $space->user_id = $input['user_id'];
        $space->data = $input['data'];
        $space->save();
        
        return $this->sendResponse(new SpaceResource($space), 'Post updated.');
    }
   
    public function destroy(Space $space)
    {
        $space->delete();
        return $this->sendResponse([], 'Post deleted.');
    }
}