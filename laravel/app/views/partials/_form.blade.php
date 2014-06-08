<div class="col-lg-3">
    <form name="userForm" id="userForm"  method="get" ng-submit="userForm.$valid &amp;&amp; updateUser()" novalidate>
        <div class="input-group">
                <input type="text" name="name" id="name" class="form-control input-sm" placeholder="Your name" value="[[ data.name ]]" required ng-model="data.name" autofocus="on"/>
                <span class="input-group-btn">
                    <button class="btn btn-success btn-sm" type="submit">Save</button>
                </span>
        </div>
    </form>
</div>
