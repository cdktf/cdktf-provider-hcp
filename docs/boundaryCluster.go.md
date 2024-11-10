# `boundaryCluster` Submodule <a name="`boundaryCluster` Submodule" id="@cdktf/provider-hcp.boundaryCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BoundaryCluster <a name="BoundaryCluster" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.98.1/docs/resources/boundary_cluster hcp_boundary_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/boundarycluster"

boundarycluster.NewBoundaryCluster(scope Construct, id *string, config BoundaryClusterConfig) BoundaryCluster
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterConfig">BoundaryClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterConfig">BoundaryClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.putMaintenanceWindowConfig">PutMaintenanceWindowConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.resetMaintenanceWindowConfig">ResetMaintenanceWindowConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.resetProjectId">ResetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutMaintenanceWindowConfig` <a name="PutMaintenanceWindowConfig" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.putMaintenanceWindowConfig"></a>

```go
func PutMaintenanceWindowConfig(value BoundaryClusterMaintenanceWindowConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.putMaintenanceWindowConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfig">BoundaryClusterMaintenanceWindowConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.putTimeouts"></a>

```go
func PutTimeouts(value BoundaryClusterTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeouts">BoundaryClusterTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.resetId"></a>

```go
func ResetId()
```

##### `ResetMaintenanceWindowConfig` <a name="ResetMaintenanceWindowConfig" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.resetMaintenanceWindowConfig"></a>

```go
func ResetMaintenanceWindowConfig()
```

##### `ResetProjectId` <a name="ResetProjectId" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.resetProjectId"></a>

```go
func ResetProjectId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a BoundaryCluster resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/boundarycluster"

boundarycluster.BoundaryCluster_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/boundarycluster"

boundarycluster.BoundaryCluster_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/boundarycluster"

boundarycluster.BoundaryCluster_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/boundarycluster"

boundarycluster.BoundaryCluster_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a BoundaryCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the BoundaryCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing BoundaryCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.98.1/docs/resources/boundary_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the BoundaryCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.property.clusterUrl">ClusterUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.property.maintenanceWindowConfig">MaintenanceWindowConfig</a></code> | <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference">BoundaryClusterMaintenanceWindowConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference">BoundaryClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.property.clusterIdInput">ClusterIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.property.maintenanceWindowConfigInput">MaintenanceWindowConfigInput</a></code> | <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfig">BoundaryClusterMaintenanceWindowConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.property.tierInput">TierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.property.clusterId">ClusterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.property.tier">Tier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.property.username">Username</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ClusterUrl`<sup>Required</sup> <a name="ClusterUrl" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.property.clusterUrl"></a>

```go
func ClusterUrl() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `MaintenanceWindowConfig`<sup>Required</sup> <a name="MaintenanceWindowConfig" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.property.maintenanceWindowConfig"></a>

```go
func MaintenanceWindowConfig() BoundaryClusterMaintenanceWindowConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference">BoundaryClusterMaintenanceWindowConfigOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.property.timeouts"></a>

```go
func Timeouts() BoundaryClusterTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference">BoundaryClusterTimeoutsOutputReference</a>

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `ClusterIdInput`<sup>Optional</sup> <a name="ClusterIdInput" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.property.clusterIdInput"></a>

```go
func ClusterIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MaintenanceWindowConfigInput`<sup>Optional</sup> <a name="MaintenanceWindowConfigInput" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.property.maintenanceWindowConfigInput"></a>

```go
func MaintenanceWindowConfigInput() BoundaryClusterMaintenanceWindowConfig
```

- *Type:* <a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfig">BoundaryClusterMaintenanceWindowConfig</a>

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `TierInput`<sup>Optional</sup> <a name="TierInput" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.property.tierInput"></a>

```go
func TierInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.property.clusterId"></a>

```go
func ClusterId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `Tier`<sup>Required</sup> <a name="Tier" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.property.tier"></a>

```go
func Tier() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### BoundaryClusterConfig <a name="BoundaryClusterConfig" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/boundarycluster"

&boundarycluster.BoundaryClusterConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ClusterId: *string,
	Password: *string,
	Tier: *string,
	Username: *string,
	Id: *string,
	MaintenanceWindowConfig: github.com/cdktf/cdktf-provider-hcp-go/hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfig,
	ProjectId: *string,
	Timeouts: github.com/cdktf/cdktf-provider-hcp-go/hcp.boundaryCluster.BoundaryClusterTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterConfig.property.clusterId">ClusterId</a></code> | <code>*string</code> | The ID of the Boundary cluster. |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterConfig.property.password">Password</a></code> | <code>*string</code> | The password of the initial admin user. |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterConfig.property.tier">Tier</a></code> | <code>*string</code> | The tier that the HCP Boundary cluster will be provisioned as, 'Standard' or 'Plus'. |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterConfig.property.username">Username</a></code> | <code>*string</code> | The username of the initial admin user. |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.98.1/docs/resources/boundary_cluster#id BoundaryCluster#id}. |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterConfig.property.maintenanceWindowConfig">MaintenanceWindowConfig</a></code> | <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfig">BoundaryClusterMaintenanceWindowConfig</a></code> | maintenance_window_config block. |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterConfig.property.projectId">ProjectId</a></code> | <code>*string</code> | The ID of the HCP project where the Boundary cluster is located. |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeouts">BoundaryClusterTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterConfig.property.clusterId"></a>

```go
ClusterId *string
```

- *Type:* *string

The ID of the Boundary cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.98.1/docs/resources/boundary_cluster#cluster_id BoundaryCluster#cluster_id}

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterConfig.property.password"></a>

```go
Password *string
```

- *Type:* *string

The password of the initial admin user.

This must be at least 8 characters in length. Note that this may show up in logs, and it will be stored in the state file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.98.1/docs/resources/boundary_cluster#password BoundaryCluster#password}

---

##### `Tier`<sup>Required</sup> <a name="Tier" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterConfig.property.tier"></a>

```go
Tier *string
```

- *Type:* *string

The tier that the HCP Boundary cluster will be provisioned as, 'Standard' or 'Plus'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.98.1/docs/resources/boundary_cluster#tier BoundaryCluster#tier}

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterConfig.property.username"></a>

```go
Username *string
```

- *Type:* *string

The username of the initial admin user.

This must be at least 3 characters in length, alphanumeric, hyphen, or period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.98.1/docs/resources/boundary_cluster#username BoundaryCluster#username}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.98.1/docs/resources/boundary_cluster#id BoundaryCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MaintenanceWindowConfig`<sup>Optional</sup> <a name="MaintenanceWindowConfig" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterConfig.property.maintenanceWindowConfig"></a>

```go
MaintenanceWindowConfig BoundaryClusterMaintenanceWindowConfig
```

- *Type:* <a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfig">BoundaryClusterMaintenanceWindowConfig</a>

maintenance_window_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.98.1/docs/resources/boundary_cluster#maintenance_window_config BoundaryCluster#maintenance_window_config}

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterConfig.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

The ID of the HCP project where the Boundary cluster is located.

If not specified, the project specified in the HCP Provider config block will be used, if configured.
If a project is not configured in the HCP Provider config block, the oldest project in the organization will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.98.1/docs/resources/boundary_cluster#project_id BoundaryCluster#project_id}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterConfig.property.timeouts"></a>

```go
Timeouts BoundaryClusterTimeouts
```

- *Type:* <a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeouts">BoundaryClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.98.1/docs/resources/boundary_cluster#timeouts BoundaryCluster#timeouts}

---

### BoundaryClusterMaintenanceWindowConfig <a name="BoundaryClusterMaintenanceWindowConfig" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/boundarycluster"

&boundarycluster.BoundaryClusterMaintenanceWindowConfig {
	Day: *string,
	End: *f64,
	Start: *f64,
	UpgradeType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfig.property.day">Day</a></code> | <code>*string</code> | The maintenance day of the week for scheduled upgrades. |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfig.property.end">End</a></code> | <code>*f64</code> | The end time which upgrades can be performed. |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfig.property.start">Start</a></code> | <code>*f64</code> | The start time which upgrades can be performed. |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfig.property.upgradeType">UpgradeType</a></code> | <code>*string</code> | The upgrade type for the cluster. Valid options for upgrade type - `AUTOMATIC`, `SCHEDULED`. |

---

##### `Day`<sup>Optional</sup> <a name="Day" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfig.property.day"></a>

```go
Day *string
```

- *Type:* *string

The maintenance day of the week for scheduled upgrades.

Valid options for maintenance window day - `MONDAY`, `TUESDAY`, `WEDNESDAY`, `THURSDAY`, `FRIDAY`, `SATURDAY`, `SUNDAY`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.98.1/docs/resources/boundary_cluster#day BoundaryCluster#day}

---

##### `End`<sup>Optional</sup> <a name="End" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfig.property.end"></a>

```go
End *f64
```

- *Type:* *f64

The end time which upgrades can be performed.

Uses 24H clock and must be in UTC time zone. Valid options include - 1 to 24 (inclusive)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.98.1/docs/resources/boundary_cluster#end BoundaryCluster#end}

---

##### `Start`<sup>Optional</sup> <a name="Start" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfig.property.start"></a>

```go
Start *f64
```

- *Type:* *f64

The start time which upgrades can be performed.

Uses 24H clock and must be in UTC time zone. Valid options include - 0 to 23 (inclusive)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.98.1/docs/resources/boundary_cluster#start BoundaryCluster#start}

---

##### `UpgradeType`<sup>Optional</sup> <a name="UpgradeType" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfig.property.upgradeType"></a>

```go
UpgradeType *string
```

- *Type:* *string

The upgrade type for the cluster. Valid options for upgrade type - `AUTOMATIC`, `SCHEDULED`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.98.1/docs/resources/boundary_cluster#upgrade_type BoundaryCluster#upgrade_type}

---

### BoundaryClusterTimeouts <a name="BoundaryClusterTimeouts" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/boundarycluster"

&boundarycluster.BoundaryClusterTimeouts {
	Create: *string,
	Default: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.98.1/docs/resources/boundary_cluster#create BoundaryCluster#create}. |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeouts.property.default">Default</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.98.1/docs/resources/boundary_cluster#default BoundaryCluster#default}. |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.98.1/docs/resources/boundary_cluster#delete BoundaryCluster#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.98.1/docs/resources/boundary_cluster#create BoundaryCluster#create}.

---

##### `Default`<sup>Optional</sup> <a name="Default" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeouts.property.default"></a>

```go
Default *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.98.1/docs/resources/boundary_cluster#default BoundaryCluster#default}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.98.1/docs/resources/boundary_cluster#delete BoundaryCluster#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### BoundaryClusterMaintenanceWindowConfigOutputReference <a name="BoundaryClusterMaintenanceWindowConfigOutputReference" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/boundarycluster"

boundarycluster.NewBoundaryClusterMaintenanceWindowConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BoundaryClusterMaintenanceWindowConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.resetDay">ResetDay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.resetEnd">ResetEnd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.resetStart">ResetStart</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.resetUpgradeType">ResetUpgradeType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDay` <a name="ResetDay" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.resetDay"></a>

```go
func ResetDay()
```

##### `ResetEnd` <a name="ResetEnd" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.resetEnd"></a>

```go
func ResetEnd()
```

##### `ResetStart` <a name="ResetStart" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.resetStart"></a>

```go
func ResetStart()
```

##### `ResetUpgradeType` <a name="ResetUpgradeType" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.resetUpgradeType"></a>

```go
func ResetUpgradeType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.property.dayInput">DayInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.property.endInput">EndInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.property.startInput">StartInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.property.upgradeTypeInput">UpgradeTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.property.day">Day</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.property.end">End</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.property.start">Start</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.property.upgradeType">UpgradeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfig">BoundaryClusterMaintenanceWindowConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DayInput`<sup>Optional</sup> <a name="DayInput" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.property.dayInput"></a>

```go
func DayInput() *string
```

- *Type:* *string

---

##### `EndInput`<sup>Optional</sup> <a name="EndInput" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.property.endInput"></a>

```go
func EndInput() *f64
```

- *Type:* *f64

---

##### `StartInput`<sup>Optional</sup> <a name="StartInput" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.property.startInput"></a>

```go
func StartInput() *f64
```

- *Type:* *f64

---

##### `UpgradeTypeInput`<sup>Optional</sup> <a name="UpgradeTypeInput" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.property.upgradeTypeInput"></a>

```go
func UpgradeTypeInput() *string
```

- *Type:* *string

---

##### `Day`<sup>Required</sup> <a name="Day" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.property.day"></a>

```go
func Day() *string
```

- *Type:* *string

---

##### `End`<sup>Required</sup> <a name="End" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.property.end"></a>

```go
func End() *f64
```

- *Type:* *f64

---

##### `Start`<sup>Required</sup> <a name="Start" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.property.start"></a>

```go
func Start() *f64
```

- *Type:* *f64

---

##### `UpgradeType`<sup>Required</sup> <a name="UpgradeType" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.property.upgradeType"></a>

```go
func UpgradeType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() BoundaryClusterMaintenanceWindowConfig
```

- *Type:* <a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfig">BoundaryClusterMaintenanceWindowConfig</a>

---


### BoundaryClusterTimeoutsOutputReference <a name="BoundaryClusterTimeoutsOutputReference" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/boundarycluster"

boundarycluster.NewBoundaryClusterTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BoundaryClusterTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.resetDefault">ResetDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDefault` <a name="ResetDefault" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.resetDefault"></a>

```go
func ResetDefault()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.property.defaultInput">DefaultInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.property.default">Default</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DefaultInput`<sup>Optional</sup> <a name="DefaultInput" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.property.defaultInput"></a>

```go
func DefaultInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.property.default"></a>

```go
func Default() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



