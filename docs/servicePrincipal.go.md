# `servicePrincipal` Submodule <a name="`servicePrincipal` Submodule" id="@cdktf/provider-hcp.servicePrincipal"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServicePrincipal <a name="ServicePrincipal" id="@cdktf/provider-hcp.servicePrincipal.ServicePrincipal"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.93.0/docs/resources/service_principal hcp_service_principal}.

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.servicePrincipal.ServicePrincipal.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/serviceprincipal"

serviceprincipal.NewServicePrincipal(scope Construct, id *string, config ServicePrincipalConfig) ServicePrincipal
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.servicePrincipal.ServicePrincipal.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-hcp.servicePrincipal.ServicePrincipal.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-hcp.servicePrincipal.ServicePrincipal.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-hcp.servicePrincipal.ServicePrincipalConfig">ServicePrincipalConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.servicePrincipal.ServicePrincipal.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.servicePrincipal.ServicePrincipal.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-hcp.servicePrincipal.ServicePrincipal.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-hcp.servicePrincipal.ServicePrincipalConfig">ServicePrincipalConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.servicePrincipal.ServicePrincipal.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-hcp.servicePrincipal.ServicePrincipal.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.servicePrincipal.ServicePrincipal.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-hcp.servicePrincipal.ServicePrincipal.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-hcp.servicePrincipal.ServicePrincipal.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.servicePrincipal.ServicePrincipal.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.servicePrincipal.ServicePrincipal.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcp.servicePrincipal.ServicePrincipal.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-hcp.servicePrincipal.ServicePrincipal.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.servicePrincipal.ServicePrincipal.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.servicePrincipal.ServicePrincipal.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.servicePrincipal.ServicePrincipal.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.servicePrincipal.ServicePrincipal.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.servicePrincipal.ServicePrincipal.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.servicePrincipal.ServicePrincipal.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.servicePrincipal.ServicePrincipal.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.servicePrincipal.ServicePrincipal.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.servicePrincipal.ServicePrincipal.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.servicePrincipal.ServicePrincipal.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.servicePrincipal.ServicePrincipal.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.servicePrincipal.ServicePrincipal.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-hcp.servicePrincipal.ServicePrincipal.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-hcp.servicePrincipal.ServicePrincipal.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-hcp.servicePrincipal.ServicePrincipal.resetParent">ResetParent</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcp.servicePrincipal.ServicePrincipal.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-hcp.servicePrincipal.ServicePrincipal.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-hcp.servicePrincipal.ServicePrincipal.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.servicePrincipal.ServicePrincipal.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-hcp.servicePrincipal.ServicePrincipal.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-hcp.servicePrincipal.ServicePrincipal.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-hcp.servicePrincipal.ServicePrincipal.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-hcp.servicePrincipal.ServicePrincipal.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-hcp.servicePrincipal.ServicePrincipal.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-hcp.servicePrincipal.ServicePrincipal.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-hcp.servicePrincipal.ServicePrincipal.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-hcp.servicePrincipal.ServicePrincipal.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-hcp.servicePrincipal.ServicePrincipal.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.servicePrincipal.ServicePrincipal.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-hcp.servicePrincipal.ServicePrincipal.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.servicePrincipal.ServicePrincipal.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-hcp.servicePrincipal.ServicePrincipal.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.servicePrincipal.ServicePrincipal.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-hcp.servicePrincipal.ServicePrincipal.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.servicePrincipal.ServicePrincipal.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-hcp.servicePrincipal.ServicePrincipal.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.servicePrincipal.ServicePrincipal.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-hcp.servicePrincipal.ServicePrincipal.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.servicePrincipal.ServicePrincipal.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-hcp.servicePrincipal.ServicePrincipal.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.servicePrincipal.ServicePrincipal.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-hcp.servicePrincipal.ServicePrincipal.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.servicePrincipal.ServicePrincipal.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-hcp.servicePrincipal.ServicePrincipal.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.servicePrincipal.ServicePrincipal.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-hcp.servicePrincipal.ServicePrincipal.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-hcp.servicePrincipal.ServicePrincipal.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.servicePrincipal.ServicePrincipal.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.servicePrincipal.ServicePrincipal.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-hcp.servicePrincipal.ServicePrincipal.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.servicePrincipal.ServicePrincipal.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-hcp.servicePrincipal.ServicePrincipal.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.servicePrincipal.ServicePrincipal.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-hcp.servicePrincipal.ServicePrincipal.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-hcp.servicePrincipal.ServicePrincipal.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-hcp.servicePrincipal.ServicePrincipal.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-hcp.servicePrincipal.ServicePrincipal.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.servicePrincipal.ServicePrincipal.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetParent` <a name="ResetParent" id="@cdktf/provider-hcp.servicePrincipal.ServicePrincipal.resetParent"></a>

```go
func ResetParent()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.servicePrincipal.ServicePrincipal.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-hcp.servicePrincipal.ServicePrincipal.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.servicePrincipal.ServicePrincipal.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.servicePrincipal.ServicePrincipal.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ServicePrincipal resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-hcp.servicePrincipal.ServicePrincipal.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/serviceprincipal"

serviceprincipal.ServicePrincipal_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.servicePrincipal.ServicePrincipal.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-hcp.servicePrincipal.ServicePrincipal.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/serviceprincipal"

serviceprincipal.ServicePrincipal_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.servicePrincipal.ServicePrincipal.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-hcp.servicePrincipal.ServicePrincipal.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/serviceprincipal"

serviceprincipal.ServicePrincipal_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.servicePrincipal.ServicePrincipal.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-hcp.servicePrincipal.ServicePrincipal.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/serviceprincipal"

serviceprincipal.ServicePrincipal_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ServicePrincipal resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.servicePrincipal.ServicePrincipal.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-hcp.servicePrincipal.ServicePrincipal.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ServicePrincipal to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-hcp.servicePrincipal.ServicePrincipal.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ServicePrincipal that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.93.0/docs/resources/service_principal#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.servicePrincipal.ServicePrincipal.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ServicePrincipal to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.servicePrincipal.ServicePrincipal.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-hcp.servicePrincipal.ServicePrincipal.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.servicePrincipal.ServicePrincipal.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.servicePrincipal.ServicePrincipal.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.servicePrincipal.ServicePrincipal.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.servicePrincipal.ServicePrincipal.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.servicePrincipal.ServicePrincipal.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.servicePrincipal.ServicePrincipal.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.servicePrincipal.ServicePrincipal.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.servicePrincipal.ServicePrincipal.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.servicePrincipal.ServicePrincipal.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.servicePrincipal.ServicePrincipal.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.servicePrincipal.ServicePrincipal.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.servicePrincipal.ServicePrincipal.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.servicePrincipal.ServicePrincipal.property.resourceId">ResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.servicePrincipal.ServicePrincipal.property.resourceName">ResourceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.servicePrincipal.ServicePrincipal.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.servicePrincipal.ServicePrincipal.property.parentInput">ParentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.servicePrincipal.ServicePrincipal.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.servicePrincipal.ServicePrincipal.property.parent">Parent</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-hcp.servicePrincipal.ServicePrincipal.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-hcp.servicePrincipal.ServicePrincipal.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.servicePrincipal.ServicePrincipal.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-hcp.servicePrincipal.ServicePrincipal.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-hcp.servicePrincipal.ServicePrincipal.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-hcp.servicePrincipal.ServicePrincipal.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-hcp.servicePrincipal.ServicePrincipal.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-hcp.servicePrincipal.ServicePrincipal.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-hcp.servicePrincipal.ServicePrincipal.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-hcp.servicePrincipal.ServicePrincipal.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-hcp.servicePrincipal.ServicePrincipal.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-hcp.servicePrincipal.ServicePrincipal.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-hcp.servicePrincipal.ServicePrincipal.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-hcp.servicePrincipal.ServicePrincipal.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktf/provider-hcp.servicePrincipal.ServicePrincipal.property.resourceId"></a>

```go
func ResourceId() *string
```

- *Type:* *string

---

##### `ResourceName`<sup>Required</sup> <a name="ResourceName" id="@cdktf/provider-hcp.servicePrincipal.ServicePrincipal.property.resourceName"></a>

```go
func ResourceName() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-hcp.servicePrincipal.ServicePrincipal.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktf/provider-hcp.servicePrincipal.ServicePrincipal.property.parentInput"></a>

```go
func ParentInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-hcp.servicePrincipal.ServicePrincipal.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktf/provider-hcp.servicePrincipal.ServicePrincipal.property.parent"></a>

```go
func Parent() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.servicePrincipal.ServicePrincipal.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-hcp.servicePrincipal.ServicePrincipal.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ServicePrincipalConfig <a name="ServicePrincipalConfig" id="@cdktf/provider-hcp.servicePrincipal.ServicePrincipalConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.servicePrincipal.ServicePrincipalConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/serviceprincipal"

&serviceprincipal.ServicePrincipalConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Parent: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.servicePrincipal.ServicePrincipalConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.servicePrincipal.ServicePrincipalConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.servicePrincipal.ServicePrincipalConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.servicePrincipal.ServicePrincipalConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.servicePrincipal.ServicePrincipalConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.servicePrincipal.ServicePrincipalConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.servicePrincipal.ServicePrincipalConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.servicePrincipal.ServicePrincipalConfig.property.name">Name</a></code> | <code>*string</code> | The service principal's name. |
| <code><a href="#@cdktf/provider-hcp.servicePrincipal.ServicePrincipalConfig.property.parent">Parent</a></code> | <code>*string</code> | The parent location to create the service principal under. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-hcp.servicePrincipal.ServicePrincipalConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-hcp.servicePrincipal.ServicePrincipalConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-hcp.servicePrincipal.ServicePrincipalConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-hcp.servicePrincipal.ServicePrincipalConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-hcp.servicePrincipal.ServicePrincipalConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-hcp.servicePrincipal.ServicePrincipalConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-hcp.servicePrincipal.ServicePrincipalConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-hcp.servicePrincipal.ServicePrincipalConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The service principal's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.93.0/docs/resources/service_principal#name ServicePrincipal#name}

---

##### `Parent`<sup>Optional</sup> <a name="Parent" id="@cdktf/provider-hcp.servicePrincipal.ServicePrincipalConfig.property.parent"></a>

```go
Parent *string
```

- *Type:* *string

The parent location to create the service principal under.

If unspecified, the service principal will be created in the project the provider is configured with. If specified, the accepted values are "project/<project_id>" or "organization/<organization_id>"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.93.0/docs/resources/service_principal#parent ServicePrincipal#parent}

---



