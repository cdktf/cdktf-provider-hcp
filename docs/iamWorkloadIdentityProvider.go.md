# `iamWorkloadIdentityProvider` Submodule <a name="`iamWorkloadIdentityProvider` Submodule" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IamWorkloadIdentityProvider <a name="IamWorkloadIdentityProvider" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.100.0/docs/resources/iam_workload_identity_provider hcp_iam_workload_identity_provider}.

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/iamworkloadidentityprovider"

iamworkloadidentityprovider.NewIamWorkloadIdentityProvider(scope Construct, id *string, config IamWorkloadIdentityProviderConfig) IamWorkloadIdentityProvider
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderConfig">IamWorkloadIdentityProviderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderConfig">IamWorkloadIdentityProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.putAws">PutAws</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.putOidc">PutOidc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.resetAws">ResetAws</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.resetOidc">ResetOidc</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAws` <a name="PutAws" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.putAws"></a>

```go
func PutAws(value IamWorkloadIdentityProviderAws)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.putAws.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAws">IamWorkloadIdentityProviderAws</a>

---

##### `PutOidc` <a name="PutOidc" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.putOidc"></a>

```go
func PutOidc(value IamWorkloadIdentityProviderOidc)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.putOidc.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidc">IamWorkloadIdentityProviderOidc</a>

---

##### `ResetAws` <a name="ResetAws" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.resetAws"></a>

```go
func ResetAws()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetOidc` <a name="ResetOidc" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.resetOidc"></a>

```go
func ResetOidc()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a IamWorkloadIdentityProvider resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/iamworkloadidentityprovider"

iamworkloadidentityprovider.IamWorkloadIdentityProvider_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/iamworkloadidentityprovider"

iamworkloadidentityprovider.IamWorkloadIdentityProvider_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/iamworkloadidentityprovider"

iamworkloadidentityprovider.IamWorkloadIdentityProvider_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/iamworkloadidentityprovider"

iamworkloadidentityprovider.IamWorkloadIdentityProvider_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a IamWorkloadIdentityProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the IamWorkloadIdentityProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing IamWorkloadIdentityProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.100.0/docs/resources/iam_workload_identity_provider#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the IamWorkloadIdentityProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.aws">Aws</a></code> | <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference">IamWorkloadIdentityProviderAwsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.oidc">Oidc</a></code> | <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference">IamWorkloadIdentityProviderOidcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.resourceId">ResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.resourceName">ResourceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.awsInput">AwsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.conditionalAccessInput">ConditionalAccessInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.oidcInput">OidcInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.servicePrincipalInput">ServicePrincipalInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.conditionalAccess">ConditionalAccess</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.servicePrincipal">ServicePrincipal</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Aws`<sup>Required</sup> <a name="Aws" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.aws"></a>

```go
func Aws() IamWorkloadIdentityProviderAwsOutputReference
```

- *Type:* <a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference">IamWorkloadIdentityProviderAwsOutputReference</a>

---

##### `Oidc`<sup>Required</sup> <a name="Oidc" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.oidc"></a>

```go
func Oidc() IamWorkloadIdentityProviderOidcOutputReference
```

- *Type:* <a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference">IamWorkloadIdentityProviderOidcOutputReference</a>

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.resourceId"></a>

```go
func ResourceId() *string
```

- *Type:* *string

---

##### `ResourceName`<sup>Required</sup> <a name="ResourceName" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.resourceName"></a>

```go
func ResourceName() *string
```

- *Type:* *string

---

##### `AwsInput`<sup>Optional</sup> <a name="AwsInput" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.awsInput"></a>

```go
func AwsInput() interface{}
```

- *Type:* interface{}

---

##### `ConditionalAccessInput`<sup>Optional</sup> <a name="ConditionalAccessInput" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.conditionalAccessInput"></a>

```go
func ConditionalAccessInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OidcInput`<sup>Optional</sup> <a name="OidcInput" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.oidcInput"></a>

```go
func OidcInput() interface{}
```

- *Type:* interface{}

---

##### `ServicePrincipalInput`<sup>Optional</sup> <a name="ServicePrincipalInput" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.servicePrincipalInput"></a>

```go
func ServicePrincipalInput() *string
```

- *Type:* *string

---

##### `ConditionalAccess`<sup>Required</sup> <a name="ConditionalAccess" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.conditionalAccess"></a>

```go
func ConditionalAccess() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ServicePrincipal`<sup>Required</sup> <a name="ServicePrincipal" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.servicePrincipal"></a>

```go
func ServicePrincipal() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### IamWorkloadIdentityProviderAws <a name="IamWorkloadIdentityProviderAws" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAws"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAws.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/iamworkloadidentityprovider"

&iamworkloadidentityprovider.IamWorkloadIdentityProviderAws {
	AccountId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAws.property.accountId">AccountId</a></code> | <code>*string</code> | The AWS Account ID that is allowed to exchange workload identities. |

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAws.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

The AWS Account ID that is allowed to exchange workload identities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.100.0/docs/resources/iam_workload_identity_provider#account_id IamWorkloadIdentityProvider#account_id}

---

### IamWorkloadIdentityProviderConfig <a name="IamWorkloadIdentityProviderConfig" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/iamworkloadidentityprovider"

&iamworkloadidentityprovider.IamWorkloadIdentityProviderConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ConditionalAccess: *string,
	Name: *string,
	ServicePrincipal: *string,
	Aws: github.com/cdktf/cdktf-provider-hcp-go/hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAws,
	Description: *string,
	Oidc: github.com/cdktf/cdktf-provider-hcp-go/hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidc,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderConfig.property.conditionalAccess">ConditionalAccess</a></code> | <code>*string</code> | conditional_access is a hashicorp/go-bexpr string that is evaluated when exchanging tokens. |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderConfig.property.name">Name</a></code> | <code>*string</code> | The workload identity provider's name. Ideally, this should be descriptive of the workload being federated. |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderConfig.property.servicePrincipal">ServicePrincipal</a></code> | <code>*string</code> | The service principal's resource name for which the workload identity provider will be created for. |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderConfig.property.aws">Aws</a></code> | <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAws">IamWorkloadIdentityProviderAws</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.100.0/docs/resources/iam_workload_identity_provider#aws IamWorkloadIdentityProvider#aws}. |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderConfig.property.description">Description</a></code> | <code>*string</code> | A description for the workload identity provider. |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderConfig.property.oidc">Oidc</a></code> | <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidc">IamWorkloadIdentityProviderOidc</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.100.0/docs/resources/iam_workload_identity_provider#oidc IamWorkloadIdentityProvider#oidc}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ConditionalAccess`<sup>Required</sup> <a name="ConditionalAccess" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderConfig.property.conditionalAccess"></a>

```go
ConditionalAccess *string
```

- *Type:* *string

conditional_access is a hashicorp/go-bexpr string that is evaluated when exchanging tokens.

It restricts which upstream identities are allowed to access the service principal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.100.0/docs/resources/iam_workload_identity_provider#conditional_access IamWorkloadIdentityProvider#conditional_access}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The workload identity provider's name. Ideally, this should be descriptive of the workload being federated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.100.0/docs/resources/iam_workload_identity_provider#name IamWorkloadIdentityProvider#name}

---

##### `ServicePrincipal`<sup>Required</sup> <a name="ServicePrincipal" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderConfig.property.servicePrincipal"></a>

```go
ServicePrincipal *string
```

- *Type:* *string

The service principal's resource name for which the workload identity provider will be created for.

Only service principals created within a project are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.100.0/docs/resources/iam_workload_identity_provider#service_principal IamWorkloadIdentityProvider#service_principal}

---

##### `Aws`<sup>Optional</sup> <a name="Aws" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderConfig.property.aws"></a>

```go
Aws IamWorkloadIdentityProviderAws
```

- *Type:* <a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAws">IamWorkloadIdentityProviderAws</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.100.0/docs/resources/iam_workload_identity_provider#aws IamWorkloadIdentityProvider#aws}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

A description for the workload identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.100.0/docs/resources/iam_workload_identity_provider#description IamWorkloadIdentityProvider#description}

---

##### `Oidc`<sup>Optional</sup> <a name="Oidc" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderConfig.property.oidc"></a>

```go
Oidc IamWorkloadIdentityProviderOidc
```

- *Type:* <a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidc">IamWorkloadIdentityProviderOidc</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.100.0/docs/resources/iam_workload_identity_provider#oidc IamWorkloadIdentityProvider#oidc}.

---

### IamWorkloadIdentityProviderOidc <a name="IamWorkloadIdentityProviderOidc" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidc"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidc.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/iamworkloadidentityprovider"

&iamworkloadidentityprovider.IamWorkloadIdentityProviderOidc {
	IssuerUri: *string,
	AllowedAudiences: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidc.property.issuerUri">IssuerUri</a></code> | <code>*string</code> | The URL of the OIDC Issuer that is allowed to exchange workload identities. |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidc.property.allowedAudiences">AllowedAudiences</a></code> | <code>*[]*string</code> | allowed_audiences is the set of audiences set on the access token that are allowed to exchange identities. |

---

##### `IssuerUri`<sup>Required</sup> <a name="IssuerUri" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidc.property.issuerUri"></a>

```go
IssuerUri *string
```

- *Type:* *string

The URL of the OIDC Issuer that is allowed to exchange workload identities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.100.0/docs/resources/iam_workload_identity_provider#issuer_uri IamWorkloadIdentityProvider#issuer_uri}

---

##### `AllowedAudiences`<sup>Optional</sup> <a name="AllowedAudiences" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidc.property.allowedAudiences"></a>

```go
AllowedAudiences *[]*string
```

- *Type:* *[]*string

allowed_audiences is the set of audiences set on the access token that are allowed to exchange identities.

The access token must have an audience that is contained in this set. If no audience is set, the default allowed audience will be the resource name of the WorkloadIdentityProvider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.100.0/docs/resources/iam_workload_identity_provider#allowed_audiences IamWorkloadIdentityProvider#allowed_audiences}

---

## Classes <a name="Classes" id="Classes"></a>

### IamWorkloadIdentityProviderAwsOutputReference <a name="IamWorkloadIdentityProviderAwsOutputReference" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/iamworkloadidentityprovider"

iamworkloadidentityprovider.NewIamWorkloadIdentityProviderAwsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IamWorkloadIdentityProviderAwsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IamWorkloadIdentityProviderOidcOutputReference <a name="IamWorkloadIdentityProviderOidcOutputReference" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/iamworkloadidentityprovider"

iamworkloadidentityprovider.NewIamWorkloadIdentityProviderOidcOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IamWorkloadIdentityProviderOidcOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.resetAllowedAudiences">ResetAllowedAudiences</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowedAudiences` <a name="ResetAllowedAudiences" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.resetAllowedAudiences"></a>

```go
func ResetAllowedAudiences()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.property.allowedAudiencesInput">AllowedAudiencesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.property.issuerUriInput">IssuerUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.property.allowedAudiences">AllowedAudiences</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.property.issuerUri">IssuerUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedAudiencesInput`<sup>Optional</sup> <a name="AllowedAudiencesInput" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.property.allowedAudiencesInput"></a>

```go
func AllowedAudiencesInput() *[]*string
```

- *Type:* *[]*string

---

##### `IssuerUriInput`<sup>Optional</sup> <a name="IssuerUriInput" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.property.issuerUriInput"></a>

```go
func IssuerUriInput() *string
```

- *Type:* *string

---

##### `AllowedAudiences`<sup>Required</sup> <a name="AllowedAudiences" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.property.allowedAudiences"></a>

```go
func AllowedAudiences() *[]*string
```

- *Type:* *[]*string

---

##### `IssuerUri`<sup>Required</sup> <a name="IssuerUri" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.property.issuerUri"></a>

```go
func IssuerUri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



