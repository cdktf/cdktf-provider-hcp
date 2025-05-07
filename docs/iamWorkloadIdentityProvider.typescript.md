# `iamWorkloadIdentityProvider` Submodule <a name="`iamWorkloadIdentityProvider` Submodule" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IamWorkloadIdentityProvider <a name="IamWorkloadIdentityProvider" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.106.0/docs/resources/iam_workload_identity_provider hcp_iam_workload_identity_provider}.

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.Initializer"></a>

```typescript
import { iamWorkloadIdentityProvider } from '@cdktf/provider-hcp'

new iamWorkloadIdentityProvider.IamWorkloadIdentityProvider(scope: Construct, id: string, config: IamWorkloadIdentityProviderConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderConfig">IamWorkloadIdentityProviderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderConfig">IamWorkloadIdentityProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.putAws">putAws</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.putOidc">putOidc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.resetAws">resetAws</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.resetOidc">resetOidc</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAws` <a name="putAws" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.putAws"></a>

```typescript
public putAws(value: IamWorkloadIdentityProviderAws): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.putAws.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAws">IamWorkloadIdentityProviderAws</a>

---

##### `putOidc` <a name="putOidc" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.putOidc"></a>

```typescript
public putOidc(value: IamWorkloadIdentityProviderOidc): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.putOidc.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidc">IamWorkloadIdentityProviderOidc</a>

---

##### `resetAws` <a name="resetAws" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.resetAws"></a>

```typescript
public resetAws(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetOidc` <a name="resetOidc" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.resetOidc"></a>

```typescript
public resetOidc(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a IamWorkloadIdentityProvider resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.isConstruct"></a>

```typescript
import { iamWorkloadIdentityProvider } from '@cdktf/provider-hcp'

iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.isTerraformElement"></a>

```typescript
import { iamWorkloadIdentityProvider } from '@cdktf/provider-hcp'

iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.isTerraformResource"></a>

```typescript
import { iamWorkloadIdentityProvider } from '@cdktf/provider-hcp'

iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.generateConfigForImport"></a>

```typescript
import { iamWorkloadIdentityProvider } from '@cdktf/provider-hcp'

iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a IamWorkloadIdentityProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IamWorkloadIdentityProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IamWorkloadIdentityProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.106.0/docs/resources/iam_workload_identity_provider#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the IamWorkloadIdentityProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.aws">aws</a></code> | <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference">IamWorkloadIdentityProviderAwsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.oidc">oidc</a></code> | <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference">IamWorkloadIdentityProviderOidcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.resourceId">resourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.resourceName">resourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.awsInput">awsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAws">IamWorkloadIdentityProviderAws</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.conditionalAccessInput">conditionalAccessInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.oidcInput">oidcInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidc">IamWorkloadIdentityProviderOidc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.servicePrincipalInput">servicePrincipalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.conditionalAccess">conditionalAccess</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.servicePrincipal">servicePrincipal</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `aws`<sup>Required</sup> <a name="aws" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.aws"></a>

```typescript
public readonly aws: IamWorkloadIdentityProviderAwsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference">IamWorkloadIdentityProviderAwsOutputReference</a>

---

##### `oidc`<sup>Required</sup> <a name="oidc" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.oidc"></a>

```typescript
public readonly oidc: IamWorkloadIdentityProviderOidcOutputReference;
```

- *Type:* <a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference">IamWorkloadIdentityProviderOidcOutputReference</a>

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

---

##### `resourceName`<sup>Required</sup> <a name="resourceName" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.resourceName"></a>

```typescript
public readonly resourceName: string;
```

- *Type:* string

---

##### `awsInput`<sup>Optional</sup> <a name="awsInput" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.awsInput"></a>

```typescript
public readonly awsInput: IResolvable | IamWorkloadIdentityProviderAws;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAws">IamWorkloadIdentityProviderAws</a>

---

##### `conditionalAccessInput`<sup>Optional</sup> <a name="conditionalAccessInput" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.conditionalAccessInput"></a>

```typescript
public readonly conditionalAccessInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `oidcInput`<sup>Optional</sup> <a name="oidcInput" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.oidcInput"></a>

```typescript
public readonly oidcInput: IResolvable | IamWorkloadIdentityProviderOidc;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidc">IamWorkloadIdentityProviderOidc</a>

---

##### `servicePrincipalInput`<sup>Optional</sup> <a name="servicePrincipalInput" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.servicePrincipalInput"></a>

```typescript
public readonly servicePrincipalInput: string;
```

- *Type:* string

---

##### `conditionalAccess`<sup>Required</sup> <a name="conditionalAccess" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.conditionalAccess"></a>

```typescript
public readonly conditionalAccess: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `servicePrincipal`<sup>Required</sup> <a name="servicePrincipal" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.servicePrincipal"></a>

```typescript
public readonly servicePrincipal: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IamWorkloadIdentityProviderAws <a name="IamWorkloadIdentityProviderAws" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAws"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAws.Initializer"></a>

```typescript
import { iamWorkloadIdentityProvider } from '@cdktf/provider-hcp'

const iamWorkloadIdentityProviderAws: iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAws = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAws.property.accountId">accountId</a></code> | <code>string</code> | The AWS Account ID that is allowed to exchange workload identities. |

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAws.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

The AWS Account ID that is allowed to exchange workload identities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.106.0/docs/resources/iam_workload_identity_provider#account_id IamWorkloadIdentityProvider#account_id}

---

### IamWorkloadIdentityProviderConfig <a name="IamWorkloadIdentityProviderConfig" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderConfig.Initializer"></a>

```typescript
import { iamWorkloadIdentityProvider } from '@cdktf/provider-hcp'

const iamWorkloadIdentityProviderConfig: iamWorkloadIdentityProvider.IamWorkloadIdentityProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderConfig.property.conditionalAccess">conditionalAccess</a></code> | <code>string</code> | conditional_access is a hashicorp/go-bexpr string that is evaluated when exchanging tokens. |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderConfig.property.name">name</a></code> | <code>string</code> | The workload identity provider's name. Ideally, this should be descriptive of the workload being federated. |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderConfig.property.servicePrincipal">servicePrincipal</a></code> | <code>string</code> | The service principal's resource name for which the workload identity provider will be created for. |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderConfig.property.aws">aws</a></code> | <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAws">IamWorkloadIdentityProviderAws</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.106.0/docs/resources/iam_workload_identity_provider#aws IamWorkloadIdentityProvider#aws}. |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderConfig.property.description">description</a></code> | <code>string</code> | A description for the workload identity provider. |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderConfig.property.oidc">oidc</a></code> | <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidc">IamWorkloadIdentityProviderOidc</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.106.0/docs/resources/iam_workload_identity_provider#oidc IamWorkloadIdentityProvider#oidc}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `conditionalAccess`<sup>Required</sup> <a name="conditionalAccess" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderConfig.property.conditionalAccess"></a>

```typescript
public readonly conditionalAccess: string;
```

- *Type:* string

conditional_access is a hashicorp/go-bexpr string that is evaluated when exchanging tokens.

It restricts which upstream identities are allowed to access the service principal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.106.0/docs/resources/iam_workload_identity_provider#conditional_access IamWorkloadIdentityProvider#conditional_access}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The workload identity provider's name. Ideally, this should be descriptive of the workload being federated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.106.0/docs/resources/iam_workload_identity_provider#name IamWorkloadIdentityProvider#name}

---

##### `servicePrincipal`<sup>Required</sup> <a name="servicePrincipal" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderConfig.property.servicePrincipal"></a>

```typescript
public readonly servicePrincipal: string;
```

- *Type:* string

The service principal's resource name for which the workload identity provider will be created for.

Only service principals created within a project are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.106.0/docs/resources/iam_workload_identity_provider#service_principal IamWorkloadIdentityProvider#service_principal}

---

##### `aws`<sup>Optional</sup> <a name="aws" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderConfig.property.aws"></a>

```typescript
public readonly aws: IamWorkloadIdentityProviderAws;
```

- *Type:* <a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAws">IamWorkloadIdentityProviderAws</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.106.0/docs/resources/iam_workload_identity_provider#aws IamWorkloadIdentityProvider#aws}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description for the workload identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.106.0/docs/resources/iam_workload_identity_provider#description IamWorkloadIdentityProvider#description}

---

##### `oidc`<sup>Optional</sup> <a name="oidc" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderConfig.property.oidc"></a>

```typescript
public readonly oidc: IamWorkloadIdentityProviderOidc;
```

- *Type:* <a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidc">IamWorkloadIdentityProviderOidc</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.106.0/docs/resources/iam_workload_identity_provider#oidc IamWorkloadIdentityProvider#oidc}.

---

### IamWorkloadIdentityProviderOidc <a name="IamWorkloadIdentityProviderOidc" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidc"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidc.Initializer"></a>

```typescript
import { iamWorkloadIdentityProvider } from '@cdktf/provider-hcp'

const iamWorkloadIdentityProviderOidc: iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidc = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidc.property.issuerUri">issuerUri</a></code> | <code>string</code> | The URL of the OIDC Issuer that is allowed to exchange workload identities. |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidc.property.allowedAudiences">allowedAudiences</a></code> | <code>string[]</code> | allowed_audiences is the set of audiences set on the access token that are allowed to exchange identities. |

---

##### `issuerUri`<sup>Required</sup> <a name="issuerUri" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidc.property.issuerUri"></a>

```typescript
public readonly issuerUri: string;
```

- *Type:* string

The URL of the OIDC Issuer that is allowed to exchange workload identities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.106.0/docs/resources/iam_workload_identity_provider#issuer_uri IamWorkloadIdentityProvider#issuer_uri}

---

##### `allowedAudiences`<sup>Optional</sup> <a name="allowedAudiences" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidc.property.allowedAudiences"></a>

```typescript
public readonly allowedAudiences: string[];
```

- *Type:* string[]

allowed_audiences is the set of audiences set on the access token that are allowed to exchange identities.

The access token must have an audience that is contained in this set. If no audience is set, the default allowed audience will be the resource name of the WorkloadIdentityProvider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.106.0/docs/resources/iam_workload_identity_provider#allowed_audiences IamWorkloadIdentityProvider#allowed_audiences}

---

## Classes <a name="Classes" id="Classes"></a>

### IamWorkloadIdentityProviderAwsOutputReference <a name="IamWorkloadIdentityProviderAwsOutputReference" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.Initializer"></a>

```typescript
import { iamWorkloadIdentityProvider } from '@cdktf/provider-hcp'

new iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAws">IamWorkloadIdentityProviderAws</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IamWorkloadIdentityProviderAws;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAws">IamWorkloadIdentityProviderAws</a>

---


### IamWorkloadIdentityProviderOidcOutputReference <a name="IamWorkloadIdentityProviderOidcOutputReference" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.Initializer"></a>

```typescript
import { iamWorkloadIdentityProvider } from '@cdktf/provider-hcp'

new iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.resetAllowedAudiences">resetAllowedAudiences</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowedAudiences` <a name="resetAllowedAudiences" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.resetAllowedAudiences"></a>

```typescript
public resetAllowedAudiences(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.property.allowedAudiencesInput">allowedAudiencesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.property.issuerUriInput">issuerUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.property.allowedAudiences">allowedAudiences</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.property.issuerUri">issuerUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidc">IamWorkloadIdentityProviderOidc</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedAudiencesInput`<sup>Optional</sup> <a name="allowedAudiencesInput" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.property.allowedAudiencesInput"></a>

```typescript
public readonly allowedAudiencesInput: string[];
```

- *Type:* string[]

---

##### `issuerUriInput`<sup>Optional</sup> <a name="issuerUriInput" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.property.issuerUriInput"></a>

```typescript
public readonly issuerUriInput: string;
```

- *Type:* string

---

##### `allowedAudiences`<sup>Required</sup> <a name="allowedAudiences" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.property.allowedAudiences"></a>

```typescript
public readonly allowedAudiences: string[];
```

- *Type:* string[]

---

##### `issuerUri`<sup>Required</sup> <a name="issuerUri" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.property.issuerUri"></a>

```typescript
public readonly issuerUri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IamWorkloadIdentityProviderOidc;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidc">IamWorkloadIdentityProviderOidc</a>

---



