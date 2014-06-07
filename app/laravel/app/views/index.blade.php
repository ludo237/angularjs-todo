@extends('master')

@section('container')
@include('partials._modern')
<div class="row" ng-controller="UserController as userCtrl">
    @include('partials._intro')
    @include('partials._form')
    @include('partials._new')
</div>
<div class="row">
    <div class="col-lg-12">
            <div class="table-responsive">
                <table class="table table-hover" ng-controller="TodoController as todoCtrl">
                    <thead>
                        <th>ID</th>
                        <th>Is Done?</th>
                        <th>Is important?</th>
                        <th>Description</th>
                        <th>Date added</th>
                        <th>Date updated</th>
                        <th></th>
                    </thead>
                    <tbody>
                        <tr ng-repeat="task in tasks track by $index | orderBy: sort.column:sort.descending" ng-class="{ success : task.done, danger : task.important }">
                            <td>{{ $index + 1 }}</td>
                            <td><input type="checkbox" ng-checked="task.done" ng-click="toggleDone($index)"></td>
                            <td><input type="checkbox" ng-checked="task.important" ng-click="toggleImportant($index)"></td>
                            <td>{{ task.description }}</td>
                            <td>{{ task.created_at | date : 'medium' }}</td>
                            <td>{{ task.updated_at | date : 'medium' }}</td>
                            <td><a href="#delete" ng-click="delete($index)" title="delete ToDo"><i class="fa fa-fw fa-trash-o"></i></a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
</div>
@stop
